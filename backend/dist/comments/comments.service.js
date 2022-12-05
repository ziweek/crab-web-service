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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("../posts/entity/post.entity");
const typeorm_2 = require("typeorm");
const comment_entity_1 = require("./entity/comment.entity");
let CommentsService = class CommentsService {
    constructor(commentsRepository, postsRepository) {
        this.commentsRepository = commentsRepository;
        this.postsRepository = postsRepository;
    }
    async createComment(createCommentDto) {
        return this.commentsRepository.save(createCommentDto);
    }
    async findAllComments() {
        return await this.commentsRepository.find();
    }
    async findComments(postId) {
        const existedPost = await this.postsRepository.findOne({
            where: { id: postId },
        });
        if (existedPost) {
            return existedPost.comments;
        }
        else {
            throw new Error('포스트가 존재하지 않았습니다.');
        }
    }
    async deleteComment(commentId, commenterId) {
        const existedComment = await this.commentsRepository.findOne({
            where: { id: commentId, commenter: { id: commenterId } },
        });
        if (existedComment) {
            await this.commentsRepository.delete(commentId);
            return { result: true };
        }
        else {
            throw new Error('댓글이 존재하지 않았습니다.');
            return { result: false };
        }
    }
    async updateComment(commentId, commenterId, createCommentDto) {
        const existedComment = await this.commentsRepository.findOne({
            where: { id: commentId, commenter: { id: commenterId } },
        });
        if (existedComment) {
            await this.commentsRepository.update(commentId, {
                content: createCommentDto.content,
                region: createCommentDto.region,
            });
            return await this.commentsRepository.findOne({
                where: { id: commentId },
            });
        }
        else {
            throw new Error('댓글이 존재하지 않았습니다.');
            return { result: false };
        }
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __param(1, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map