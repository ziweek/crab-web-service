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
const createUserDto_1 = require("./dto/createUserDto");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async findAllUsers() {
        return this.userService.findAllUsers();
    }
    findOneUser(param) {
        return this.userService.findOneUser(param.id);
    }
    createUser(createUserDto) {
        return this.userService.createUser(createUserDto);
    }
    updateUser(param, createUserDto) {
        return this.userService.updateUser(param.id, createUserDto);
    }
    deleteUser(param) {
        this.userService.deleteUser(param.id);
    }
};
__decorate([
    (0, common_1.Get)(),
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
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '유저 하나 조회하기' }),
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
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOneUser", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '유저 생성하기' }),
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
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserDto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Patch)(':id'),
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
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createUserDto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '유저 삭제하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '반환 없음',
        schema: {
            example: {},
        },
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('User API'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map