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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const registerAccountDto_1 = require("./dto/registerAccountDto");
const validateAccountDto_1 = require("./dto/validateAccountDto");
const auth_guard_1 = require("./security/auth.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    registerAccount(req, registerAccountDto) {
        return this.authService.registerNewAccount(registerAccountDto);
    }
    async login(validateAccountDto, res) {
        const jwt = await this.authService.validateAccount(validateAccountDto);
        res.setHeader('Authorization', 'Bearer ' + jwt.accessToken);
        return res.json(jwt);
    }
    isAuthenticated(req) {
        const user = req.user;
        return user;
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    (0, swagger_1.ApiOperation)({ summary: '회원가입' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '유저 정보',
        schema: {
            example: {
                name: 'test',
                phone: '01012345678',
                email: 'test@amdin.com',
                password: '$2b$10$AqVvjdFb8nI2TxmRpLqEBOOczztK5UABnb7..bkOa0N.HeBGHdIzO',
                nickname: null,
                text: null,
                profileImg: null,
                region: null,
                deleteAt: null,
                id: 1,
                createAt: '2022-11-30T05:54:13.099Z',
                updateAt: '2022-11-30T05:54:13.099Z',
            },
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, registerAccountDto_1.RegisterAccountDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerAccount", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiOperation)({ summary: '로그인' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '접근 토큰 발급',
        schema: {
            example: {
                accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAYW1kaW4uY29tIiwiaWF0IjoxNjY5Nzg3NjgxLCJleHAiOjE2Njk3ODc5ODF9.c0kAMeXpkjs0cSfIVNojOL47bdkdiWp8anZk6tlHYwU',
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validateAccountDto_1.ValidateAccountDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('/authenticate'),
    (0, swagger_1.ApiOperation)({ summary: '인증' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: '로그인 인증',
        schema: {
            example: {
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
        },
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AuthController.prototype, "isAuthenticated", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map