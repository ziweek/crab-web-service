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
      where: { id: createPostDto.author.id },
    });
    const targetPost = await this.postsRepository.save(createPostDto);
    targetPost.author = author;
    return await this.postsRepository.save(targetPost);
  }

  async findAllPosts(): Promise<Post[]> {
    return await this.postsRepository.find();
  }

  async findPosts(user: User): Promise<any> {
    return await this.postsRepository.find({
      where: { author: { id: user.id } },
    });
  }

  async updatePost(
    postId: number,
    userId: number,
    createPostDto: CreatePostDto,
  ): Promise<any> {
    const existedPost = await this.postsRepository.findOne({
      where: { id: postId, author: { id: userId } },
    });
    if (existedPost) {
      await this.postsRepository.update(postId, {
        title: createPostDto.title,
        content: createPostDto.content,
        images: createPostDto.images,
        region: createPostDto.region,
        hidden: createPostDto.hidden,
      });
      return await this.postsRepository.findOne({
        where: { id: postId },
      });
    } else {
      throw new Error('포스트가 존재하지 않았습니다.');
    }
  }

  async deletePost(postId: number, userId: number): Promise<any> {
    const existedPost = await this.postsRepository.findOne({
      where: { id: postId, author: { id: userId } },
    });
    if (existedPost) {
      try {
        await this.postsRepository.delete(postId);
        return { result: true };
      } catch (error) {
        return { result: false, error: error };
      }
    } else {
      throw new Error('포스트가 존재하지 않았습니다.');
    }
  }
}
