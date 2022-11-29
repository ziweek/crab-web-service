import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
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
      console.log(e.region);
    });
    return 'aaa';
  }
}
