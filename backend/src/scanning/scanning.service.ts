import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entity/post.entity';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ScanningService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async getNearPosts(region: string): Promise<any> {
    const container = [];
    console.log(region);
    const target = await this.postRepository.find();
    console.log(target);
    target.forEach((e) => {
      console.log(e.region);
    });
    return 'aaa';
  }
}
