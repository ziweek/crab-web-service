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
exports.CreatePostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreatePostDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: '작성자',
        required: true,
    }),
    __metadata("design:type", Number)
], CreatePostDto.prototype, "authorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '오늘 고양이 밥 준 썰푼다.',
        description: '제목',
        required: true,
    }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '고양이가 손을 물더라',
        description: '본문',
        required: true,
    }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'imgURL',
        description: '사진',
        required: true,
    }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '{ "lng": 127.0337661, "lat": 37.5885098 }',
        description: '위도 및 경도 좌표데이터',
        required: true,
    }),
    __metadata("design:type", Object)
], CreatePostDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'true',
        description: '표시 여부',
        required: true,
    }),
    __metadata("design:type", Boolean)
], CreatePostDto.prototype, "hidden", void 0);
exports.CreatePostDto = CreatePostDto;
//# sourceMappingURL=createPostDto.js.map