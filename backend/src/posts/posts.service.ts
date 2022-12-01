import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPostDto';
import { Post } from './entity/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,

    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    // author 추가해야함.
    const author = await this.usersRepository.findOne({
      where: { id: createPostDto.authorId },
    });
    const targetPost = await this.postsRepository.save(createPostDto);
    targetPost.author = author;
    return await this.postsRepository.save(targetPost);
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
