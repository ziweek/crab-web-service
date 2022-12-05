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
exports.ScanningController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/security/auth.guard");
const scanning_service_1 = require("./scanning.service");
let ScanningController = class ScanningController {
    constructor(scanningService) {
        this.scanningService = scanningService;
    }
    getNearPosts(req) {
        return this.scanningService.getNearPosts(req);
    }
    getNearUsers(req) {
        return this.scanningService.getNearUsers(req);
    }
    getNearNonFriends(req) {
        return this.scanningService.getNearNonFriends(req);
    }
    getNearFriends(req) {
        return this.scanningService.getNearFriends(req);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '근처 친구의 포스트 조회하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '근처 포스트 반환',
        schema: {
            example: [
                {
                    index: 1,
                    distance: 200,
                    post: {
                        id: 3,
                        title: '사거리가 쓴 글',
                        content: '내용입니다.2',
                        images: '이미지링크입니다.2',
                        region: {
                            lat: 37.5864,
                            lng: 127.0325,
                        },
                        hidden: false,
                        createAt: '2022-12-04T17:01:08.351Z',
                        updateAt: '2022-12-04T17:01:08.351Z',
                        deleteAt: null,
                        author: {
                            id: 3,
                            name: 'user3',
                            phone: 0,
                            email: 'user3@amdin.com',
                            password: '$2b$10$a.a/g6tBZIyucfvzLo77huTh2/V54mH5kneNwzZA9.0VrTzxPE1aO',
                            nickname: '사거리',
                            text: null,
                            profileImg: null,
                            region: {
                                lat: 37.5864,
                                lng: 127.0325,
                            },
                            requesteingFriendIds: [],
                            requestedFriendIds: [],
                            acceptedFriendIds: ['1'],
                            createAt: '2022-12-04T16:59:52.521Z',
                            updateAt: '2022-12-04T17:02:03.000Z',
                            deleteAt: null,
                            authority: null,
                        },
                        comments: [],
                    },
                },
                {
                    index: 0,
                    distance: 400,
                    post: {
                        id: 2,
                        title: '안암역이 쓴 글',
                        content: '내용입니다.2',
                        images: '이미지링크입니다.2',
                        region: {
                            lat: 37.5862,
                            lng: 127.0295,
                        },
                        hidden: false,
                        createAt: '2022-12-04T16:57:27.421Z',
                        updateAt: '2022-12-04T16:57:27.421Z',
                        deleteAt: null,
                        author: {
                            id: 2,
                            name: 'user2',
                            phone: 0,
                            email: 'user2@amdin.com',
                            password: '$2b$10$8pLUqQ3vJ.N/FyVI58ksX.ym877qKc21a/HRbmrQN4a9nuLVCKxx6',
                            nickname: '안암역',
                            text: null,
                            profileImg: null,
                            region: {
                                lat: 37.5862,
                                lng: 127.0295,
                            },
                            requesteingFriendIds: [],
                            requestedFriendIds: [],
                            acceptedFriendIds: ['1'],
                            createAt: '2022-12-04T16:53:34.448Z',
                            updateAt: '2022-12-04T16:59:13.000Z',
                            deleteAt: null,
                            authority: null,
                        },
                        comments: [],
                    },
                },
            ],
        },
    }),
    (0, common_1.Post)('/getNearPosts'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ScanningController.prototype, "getNearPosts", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '근처 모든 유저 조회하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '모든 유저 거리순으로 반환',
        schema: {
            example: [
                {
                    index: 1,
                    distance: 300,
                    post: {
                        id: 3,
                        name: 'user3',
                        phone: 0,
                        email: 'user3@amdin.com',
                        password: '$2b$10$a.a/g6tBZIyucfvzLo77huTh2/V54mH5kneNwzZA9.0VrTzxPE1aO',
                        nickname: '사거리',
                        text: null,
                        profileImg: null,
                        isActive: true,
                        region: {
                            lat: 37.5864,
                            lng: 127.0325,
                        },
                        requesteingFriendIds: [],
                        requestedFriendIds: [],
                        acceptedFriendIds: ['1'],
                        createAt: '2022-12-04T16:59:52.521Z',
                        updateAt: '2022-12-04T17:45:37.000Z',
                        deleteAt: null,
                        authority: null,
                    },
                },
                {
                    index: 0,
                    distance: 400,
                    post: {
                        id: 1,
                        name: 'user1',
                        phone: 0,
                        email: 'user1@amdin.com',
                        password: '1111',
                        nickname: '중앙광장',
                        text: null,
                        profileImg: null,
                        isActive: true,
                        region: {
                            lat: 37.5884,
                            lng: 127.0337,
                        },
                        requesteingFriendIds: [],
                        requestedFriendIds: [],
                        acceptedFriendIds: ['2', '3'],
                        createAt: '2022-12-04T16:53:07.850Z',
                        updateAt: '2022-12-04T17:46:33.000Z',
                        deleteAt: null,
                        authority: null,
                    },
                },
            ],
        },
    }),
    (0, common_1.Post)('/getNearUsers'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ScanningController.prototype, "getNearUsers", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '근처 친구가 아닌 유저 조회하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '근처 친구가 아닌 유저 거리순으로 반환',
        schema: {
            example: [
                {
                    index: 0,
                    distance: 200,
                    post: {
                        id: 3,
                        name: 'user3',
                        phone: 0,
                        email: 'user3@amdin.com',
                        password: '$2b$10$a.a/g6tBZIyucfvzLo77huTh2/V54mH5kneNwzZA9.0VrTzxPE1aO',
                        nickname: '사거리',
                        text: null,
                        profileImg: null,
                        isActive: true,
                        region: {
                            lat: 37.5864,
                            lng: 127.0325,
                        },
                        requesteingFriendIds: [],
                        requestedFriendIds: [],
                        acceptedFriendIds: ['1'],
                        createAt: '2022-12-04T16:59:52.521Z',
                        updateAt: '2022-12-04T17:45:37.000Z',
                        deleteAt: null,
                        authority: null,
                    },
                },
            ],
        },
    }),
    (0, common_1.Post)('/getNearNonFriends'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ScanningController.prototype, "getNearNonFriends", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: '근처 친구인 유저 조회하기' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '근처 친구인 유저 거리순으로 반환',
        schema: {
            example: [
                {
                    index: 0,
                    distance: 0,
                    post: {
                        id: 1,
                        name: 'user1',
                        phone: 0,
                        email: 'user1@amdin.com',
                        password: '1111',
                        nickname: '중앙광장',
                        text: null,
                        profileImg: null,
                        isActive: true,
                        region: {
                            lat: 37.5884,
                            lng: 127.0337,
                        },
                        requesteingFriendIds: [],
                        requestedFriendIds: [],
                        acceptedFriendIds: ['2', '3'],
                        createAt: '2022-12-04T16:53:07.850Z',
                        updateAt: '2022-12-04T17:46:33.000Z',
                        deleteAt: null,
                        authority: null,
                    },
                },
            ],
        },
    }),
    (0, common_1.Post)('/getNearFriends'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ScanningController.prototype, "getNearFriends", null);
ScanningController = __decorate([
    (0, common_1.Controller)('scanning'),
    (0, swagger_1.ApiTags)('Scanning API'),
    __metadata("design:paramtypes", [scanning_service_1.ScanningService])
], ScanningController);
exports.ScanningController = ScanningController;
//# sourceMappingURL=scanning.controller.js.map