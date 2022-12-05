"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entity/users.entity");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entity/post.entity");
let PostsService = class PostsService {
    constructor(postsRepository, usersRepository) {
        this.postsRepository = postsRepository;
        this.usersRepository = usersRepository;
    }
    async createPost(createPostDto) {
        const author = await this.usersRepository.findOne({
            where: { id: createPostDto.author.id },
        });
        const targetPost = await this.postsRepository.save(createPostDto);
        targetPost.author = author;
        return await this.postsRepository.save(targetPost);
    }
    async findAllPosts() {
        return await this.postsRepository.find();
    }
    async findPosts(user) {
        return await this.postsRepository.find({
            where: { author: { id: user.id } },
        });
    }
    async updatePost(postId, userId, createPostDto) {
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
        }
        else {
            throw new Error('포스트가 존재하지 않았습니다.');
        }
    }
    async deletePost(postId, userId) {
        const existedPost = await this.postsRepository.findOne({
            where: { id: postId, author: { id: userId } },
        });
        if (existedPost) {
            try {
                await this.postsRepository.delete(postId);
                return { result: true };
            }
            catch (error) {
                return { result: false, error: error };
            }
        }
        else {
            throw new Error('포스트가 존재하지 않았습니다.');
        }
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map