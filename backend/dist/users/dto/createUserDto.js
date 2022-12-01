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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '김지욱',
        description: '유저 이름',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '01012345678',
        description: '전화번호',
        required: true,
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'admin@admin.com',
        description: '이메일',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '********',
        description: '비밀번호',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '닉네임',
        description: 'zi.we_ek',
        required: false,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nickname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Hi, there. I am Jiuk',
        description: '자기소개',
        required: false,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'img',
        description: '프로필사진 URL',
        required: false,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "profileImg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '{"lng":123,"lat":37}',
        description: '지역 JSON',
        required: true,
    }),
    __metadata("design:type", Object)
], CreateUserDto.prototype, "region", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=createUserDto.js.map