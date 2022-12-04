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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/security/auth.guard");
const acceptFriendshipDto_1 = require("./dto/acceptFriendshipDto");
const createUserDto_1 = require("./dto/createUserDto");
const rejectFriendshipDto_1 = require("./dto/rejectFriendshipDto");
const requestFriendshipDto_1 = require("./dto/requestFriendshipDto");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async findAllUsers() {
        return this.userService.findAllUsers();
    }
    findOneUser(req) {
        console.log(req.user);
        return this.userService.findOneUser(req.user.id);
    }
    updateUser(req, createUserDto) {
        return this.userService.updateUser(req.user.id, createUserDto);
    }
    deleteUser(req) {
        this.userService.deleteUser(req.user.id);
    }
    requestFriendship(req, requestFriendshipDto) {
        return this.userService.requestFriendship(req.user.id, requestFriendshipDto);
    }
    acceptFriendship(req, acceptFriendshipDto) {
        return this.userService.acceptFriendship(req.user.id, acceptFriendshipDto);
    }
    rejectFriendship(req, rejectFriendshipDto) {
        return this.userService.rejectFriendship(req.user.id, rejectFriendshipDto);
    }
    deleteFriendship(req, rejectFriendshipDto) {
        return this.userService.deleteFriendship(req.user.id, rejectFriendshipDto);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    (0, swagger_1.ApiOperation)({ summary: '전체 유저 조회하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '전체 유저 반환',
        schema: {
            example: [
                {
                    id: 1,
                    name: 'test',
                    nickname: null,
                    text: null,
                    profileImg: null,
                    phone: 1012345678,
                    email: 'test@amdin.com',
                    region: null,
                    password: '$2b$10$AqVvjdFb8nI2TxmRpLqEBOOczztK5UABnb7..bkOa0N.HeBGHdIzO',
                    createAt: '2022-11-30T05:54:13.099Z',
                    updateAt: '2022-11-30T05:54:13.099Z',
                    deleteAt: null,
                    authority: null,
                    requestedFriendship: [],
                    responsedFriendship: [],
                },
                {
                    id: 2,
                    name: 'test',
                    nickname: null,
                    text: null,
                    profileImg: null,
                    phone: 1012345678,
                    email: 'test2@amdin.com',
                    region: null,
                    password: '$2b$10$yPPJxWm86jo/2.jRQqr1xONOnzusThKsnRzyXi/bOga5KFXmXAiBW',
                    createAt: '2022-11-30T05:59:32.865Z',
                    updateAt: '2022-11-30T05:59:32.865Z',
                    deleteAt: null,
                    authority: null,
                    requestedFriendship: [],
                    responsedFriendship: [],
                },
            ],
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '유저 조회하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '생성된 유저 반환',
        schema: {
            example: {
                name: 'test',
                phone: '01012345678',
                email: 'admin@amdin.com',
                password: 'test',
                nickname: null,
                text: null,
                profileImg: null,
                region: null,
                deleteAt: null,
                id: 3,
                createAt: '2022-11-30T06:06:02.020Z',
                updateAt: '2022-11-30T06:06:02.020Z',
            },
        },
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOneUser", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(),
    (0, swagger_1.ApiOperation)({ summary: '유저 수정하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '수정된 유저 반환',
        schema: {
            example: {
                name: 'test',
                phone: '01012345678',
                email: 'admin@amdin.com',
                password: 'test',
                nickname: null,
                text: null,
                profileImg: null,
                region: null,
                deleteAt: null,
                id: 3,
                createAt: '2022-11-30T06:06:02.020Z',
                updateAt: '2022-11-30T06:06:02.020Z',
            },
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createUserDto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({ summary: '유저 삭제하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '반환 없음',
        schema: {
            example: {},
        },
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('requestFriendship'),
    (0, swagger_1.ApiOperation)({ summary: '친구신청 요청하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '반환 없음',
        schema: {
            example: {},
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, requestFriendshipDto_1.RequestFriendshipDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "requestFriendship", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('acceptFriendship'),
    (0, swagger_1.ApiOperation)({ summary: '친구신청 수락하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '반환 없음',
        schema: {
            example: {},
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, acceptFriendshipDto_1.AcceptFriendshipDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "acceptFriendship", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('rejectFriendship'),
    (0, swagger_1.ApiOperation)({ summary: '친구신청 거절하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '반환 없음',
        schema: {
            example: {},
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rejectFriendshipDto_1.RejectFriendshipDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "rejectFriendship", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('deleteFriendship/:id'),
    (0, swagger_1.ApiOperation)({ summary: '친구 신청하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '반환 없음',
        schema: {
            example: {},
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rejectFriendshipDto_1.RejectFriendshipDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteFriendship", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('User API'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map