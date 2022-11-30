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

  async calculateDistance() {
    return;
  }

  async getNearPosts(getNearPostsDto: GetNearPostsDto): Promise<any> {
    console.log(getNearPostsDto.region);
    const container = [];
    const target = await this.postRepository.find();
    // console.log(target);
    target.forEach((e) => {
      //   console.log(e.region);
      console.log(getNearPostsDto.region);
      const latDif = e.region['lat'] - getNearPostsDto.region['lat'];
      const lngDif = e.region['lng'] - getNearPostsDto.region['lng'];
      const distance = Math.sqrt(latDif * latDif + lngDif * lngDif);
      //   console.log(distance);
      if (distance < 5) {
        container.push(e);
      }
      //   console.log(container);
    });
    return container;
  }

  async getNearUsers(getNearFriendsDto: GetNearFriendsDto): Promise<any> {
    console.log(getNearFriendsDto.region);
    const container = [];
    const target = await this.postRepository.find();
    // console.log(target);
    target.forEach((e) => {
      //   console.log(e.region);
      console.log(getNearFriendsDto.region);
      const latDif = e.region['lat'] - getNearFriendsDto.region['lat'];
      const lngDif = e.region['lng'] - getNearFriendsDto.region['lng'];
      const distance = Math.sqrt(latDif * latDif + lngDif * lngDif);
      //   console.log(distance);
      if (distance < 5) {
        container.push(e);
      }
      //   console.log(container);
    });
    return container;
  }
}
