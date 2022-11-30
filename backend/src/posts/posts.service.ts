import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPostDto';
import { Post } from './entity/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async createPost(createPostDto: CreatePostDto): Promise<void> {
    // author 추가해야함.
    this.postsRepository.save(createPostDto);
  }

  async findAllPosts(): Promise<Post[]> {
    return await this.postsRepository.find();
  }

  async findOnePost(id: number): Promise<Post> {
    return await this.postsRepository.findOne({ where: { id: id } });
  }

  async deletePost(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }

  async updatePost(id: number, createPostDto: CreatePostDto): Promise<void> {
    await this.postsRepository.update(id, {
      title: createPostDto.title,
      content: createPostDto.content,
      images: createPostDto.images,
      region: createPostDto.region,
      hidden: createPostDto.hidden,
    });
  }
}
