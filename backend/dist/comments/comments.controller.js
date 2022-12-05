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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/security/auth.guard");
const comments_service_1 = require("./comments.service");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    findAllComments() {
        return this.commentsService.findAllComments();
    }
    findComments(req) {
        const postId = req.body.postId;
        return this.commentsService.findComments(postId);
    }
    createComment(req) {
        const createCommentDto = req.body;
        createCommentDto.commenter = req.user;
        return this.commentsService.createComment(createCommentDto);
    }
    updateComment(req) {
        const commentId = req.params.id;
        const commenterId = req.user.id;
        const createCommentDto = req.body;
        return this.commentsService.updateComment(commentId, commenterId, createCommentDto);
    }
    deleteComment(req) {
        const commentId = req.params.id;
        const commenterId = req.user.id;
        return this.commentsService.deleteComment(commentId, commenterId);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    (0, swagger_1.ApiOperation)({ summary: '전체 댓글 조회하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '전체 댓글 반환',
        schema: {},
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "findAllComments", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '댓글 조회하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '포스트의 댓글 반환',
        schema: {},
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "findComments", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '댓글 작성하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '댓글 작성하기',
        schema: {},
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "createComment", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '댓글 수정하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '댓글 수정하기',
        schema: {},
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "updateComment", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '댓글 삭제하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '댓글 삭제하기',
        schema: {
            example: {
                result: true,
            },
        },
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "deleteComment", null);
CommentsController = __decorate([
    (0, common_1.Controller)('comments'),
    (0, swagger_1.ApiTags)('Comment API'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map