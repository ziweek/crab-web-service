import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
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

  async getNearPosts(getNearPostsDto: GetNearPostsDto): Promise<any> {
    // console.log(getNearPostsDto.region);
    const container = [];
    const target = await this.postRepository.find();
    target.forEach((e) => {
      // console.log(getNearPostsDto.region);
      const distance = this.getDistance(getNearPostsDto.region, e.region);
      console.log(distance);
      if (distance < 500) {
        container.push(e);
      }
    });
    return container;
  }

  async getNearUsers(getNearFriendsDto: GetNearFriendsDto): Promise<any> {
    // console.log(getNearFriendsDto.region);
    const container = [];
    const target = await this.userRepository.find();
    // console.log(target);
    target.forEach((e) => {
      //   console.log(e.region);
      // console.log(getNearFriendsDto.region);
      // const latDif = e.region['lat'] - getNearFriendsDto.region['lat'];
      // const lngDif = e.region['lng'] - getNearFriendsDto.region['lng'];
      const distance = this.getDistance(getNearFriendsDto.region, e.region);
      // console.log(distance);
      if (distance < 500) {
        container.push(e);
      }
      //   console.log(container);
    });
    return container;
  }
}
