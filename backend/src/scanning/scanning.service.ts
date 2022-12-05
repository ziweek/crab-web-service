import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import { In, Not, Repository } from 'typeorm';
import { GetNearFriendsDto } from './dto/getNearFriendsDto';
import { GetNearPostsDto } from './dto/getNearPostsDto';

@Injectable()
export class ScanningService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  getDistance = (region1, region2) => {
    const lat1 = region1.lat;
    const lon1 = region1.lng;
    const lat2 = region2.lat;
    const lon2 = region2.lng;
    if (lat1 == lat2 && lon1 == lon2) return 0;

    var radLat1 = (Math.PI * lat1) / 180;
    var radLat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radTheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radLat1) * Math.sin(radLat2) +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    if (dist > 1) dist = 1;

    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344 * 1000;
    if (dist < 100) dist = Math.round(dist / 10) * 10;
    else dist = Math.round(dist / 100) * 100;

    return dist;
  };

  async getNearPosts(req): Promise<any> {
    const loadedPosts = await this.postRepository.find({
      where: { author: { id: In(req.user.acceptedFriendIds) } },
    });
    // console.log(loadedPosts);
    // console.log(req.body);
    const container = [];
    loadedPosts.forEach((e, i) => {
      const distance = this.getDistance(req.body.region, e.region);
      const element = { index: i, distance: distance, post: e };
      container.push(element);
    });
    // console.log(container);
    container.sort((a, b) => {
      return a.distance - b.distance;
    });
    // console.log(container);
    return container;
  }

  async getNearUsers(req): Promise<any> {
    const loadedUsers = await this.userRepository.find({
      where: { isActive: true },
    });
    // console.log(loadedUsers);
    const container = [];
    loadedUsers.forEach((e, i) => {
      const distance = this.getDistance(req.body.region, e.region);
      const element = { index: i, distance: distance, post: e };
      container.push(element);
    });
    // console.log(container);
    container.sort((a, b) => {
      return a.distance - b.distance;
    });
    // console.log(container);
    return container;
  }

  async getNearNonFriends(req): Promise<any> {
    const loadedUsers = await this.userRepository.find({
      where: { isActive: true, id: Not(req.user.acceptedFriendIds) },
    });
    console.log(loadedUsers);
    const container = [];
    loadedUsers.forEach((e, i) => {
      const distance = this.getDistance(req.body.region, e.region);
      const element = { index: i, distance: distance, post: e };
      container.push(element);
    });
    // console.log(container);
    container.sort((a, b) => {
      return a.distance - b.distance;
    });
    // console.log(container);
    return container;
  }

  async getNearFriends(req): Promise<any> {
    // console.log(req.user.acceptedFriendIds);
    const loadedUsers = await this.userRepository.find({
      where: { isActive: true, id: In(req.user.acceptedFriendIds) },
    });
    // console.log(loadedUsers);
    const container = [];
    loadedUsers.forEach((e, i) => {
      const distance = this.getDistance(req.body.region, e.region);
      const element = { index: i, distance: distance, post: e };
      container.push(element);
    });
    // console.log(container);
    container.sort((a, b) => {
      return a.distance - b.distance;
    });
    // console.log(container);
    return container;
  }
}
