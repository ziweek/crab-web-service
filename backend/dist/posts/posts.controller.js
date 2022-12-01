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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createPostDto_1 = require("./dto/createPostDto");
const posts_service_1 = require("./posts.service");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    findAllPosts() {
        return this.postsService.findAllPosts();
    }
    findOnePost(param) {
        return this.postsService.findOnePost(param.id);
    }
    createPost(createPostDto) {
        return this.postsService.createPost(createPostDto);
    }
    updatePost(param, createPostDto) {
        this.postsService.updatePost(param.id, createPostDto);
    }
    deletePost(param) {
        this.postsService.deletePost(param.id);
        return ['deletePost', `${param.id}`];
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '전체 포스트 조회하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '전체 포스트 반환',
        schema: {
            example: [
                {
                    id: 3,
                    title: 'test',
                    content: '01012345678',
                    images: 'admin@amdin.co,kr',
                    region: {
                        lat: 37.5885098,
                        lng: 127.0337661,
                    },
                    hidden: true,
                    createAt: '2022-12-01T05:20:17.442Z',
                    updateAt: '2022-12-01T05:20:17.442Z',
                    deleteAt: null,
                    author: null,
                    comments: [],
                },
                {
                    id: 4,
                    title: 'test',
                    content: '01012345678',
                    images: 'admin@amdin.co,kr',
                    region: {
                        lat: 37.5885098,
                        lng: 127.0337661,
                    },
                    hidden: true,
                    createAt: '2022-12-01T05:22:35.520Z',
                    updateAt: '2022-12-01T05:22:35.520Z',
                    deleteAt: null,
                    author: null,
                    comments: [],
                },
            ],
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "findAllPosts", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', example: 1, required: true }),
    (0, swagger_1.ApiOperation)({ summary: '포스트 하나 조회하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '포스트 하나 반환',
        schema: {
            example: {
                id: 4,
                title: 'test',
                content: '01012345678',
                images: 'admin@amdin.co,kr',
                region: {
                    lat: 37.5885098,
                    lng: 127.0337661,
                },
                hidden: true,
                createAt: '2022-12-01T05:22:35.520Z',
                updateAt: '2022-12-01T05:22:35.520Z',
                deleteAt: null,
                author: null,
                comments: [],
            },
        },
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "findOnePost", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '포스트 생성하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '포스트 생성',
        schema: {},
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPostDto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '포스트 수정하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '포스트 수정',
        schema: {
            example: {
                id: 4,
                title: 'test',
                content: '01012345678',
                images: 'admin@amdin.co,kr',
                region: {
                    lat: 37.5885098,
                    lng: 127.0337661,
                },
                hidden: true,
                createAt: '2022-12-01T05:22:35.520Z',
                updateAt: '2022-12-01T05:22:35.520Z',
                deleteAt: null,
                author: null,
                comments: [],
            },
        },
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createPostDto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '포스트 삭제하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '포스트 삭제',
        schema: {
            example: ['deletePost', '3'],
        },
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "deletePost", null);
PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    (0, swagger_1.ApiTags)('Post API'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map