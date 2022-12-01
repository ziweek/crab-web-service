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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const authority_entity_1 = require("../../auth/entity/authority.entity");
const friendship_entity_1 = require("../../friendships/entity/friendship.entity");
const post_entity_1 = require("../../posts/entity/post.entity");
const typeorm_1 = require("typeorm");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        example: '김지욱',
        description: '이름',
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        example: '{"lng":123,"lat":37}',
        description: '지역 JSON',
        required: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        example: '{"lng":123,"lat":37}',
        description: '지역 JSON',
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        example: '{"lng":123,"lat":37}',
        description: '지역 JSON',
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    (0, swagger_1.ApiProperty)({
        example: '닉네임',
        description: 'zi.we_ek',
        required: false,
    }),
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    (0, swagger_1.ApiProperty)({
        example: 'Hi, there. I am Jiuk',
        description: '자기소개',
        required: false,
    }),
    __metadata("design:type", String)
], User.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    (0, swagger_1.ApiProperty)({
        example: '{"lng":123,"lat":37}',
        description: '지역 JSON',
        required: false,
    }),
    __metadata("design:type", String)
], User.prototype, "profileImg", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    (0, swagger_1.ApiProperty)({
        example: '{"lng":123,"lat":37}',
        description: '지역 JSON',
        required: true,
    }),
    __metadata("design:type", Object)
], User.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_entity_1.Post, (post) => post.author, { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => authority_entity_1.Authority, (authority) => authority.id, { eager: true }),
    __metadata("design:type", authority_entity_1.Authority)
], User.prototype, "authority", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => friendship_entity_1.Friendship, (friendship) => friendship.requestedFriends, {
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "requestedFriendship", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => friendship_entity_1.Friendship, (friendship) => friendship.acceptedFriends, {
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "acceptedFriendship", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => friendship_entity_1.Friendship, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", friendship_entity_1.Friendship)
], User.prototype, "friendship", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "deleteAt", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=users.entity.js.map