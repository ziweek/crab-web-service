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
exports.ScanningService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("../posts/entity/post.entity");
const users_entity_1 = require("../users/entity/users.entity");
const typeorm_2 = require("typeorm");
let ScanningService = class ScanningService {
    constructor(userRepository, postRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }
    async calculateDistance() {
        return;
    }
    async getNearPosts(getNearPostsDto) {
        console.log(getNearPostsDto.region);
        const container = [];
        const target = await this.postRepository.find();
        target.forEach((e) => {
            console.log(getNearPostsDto.region);
            const latDif = e.region['lat'] - getNearPostsDto.region['lat'];
            const lngDif = e.region['lng'] - getNearPostsDto.region['lng'];
            const distance = Math.sqrt(latDif * latDif + lngDif * lngDif);
            if (distance < 5) {
                container.push(e);
            }
        });
        return container;
    }
    async getNearUsers(getNearFriendsDto) {
        console.log(getNearFriendsDto.region);
        const container = [];
        const target = await this.postRepository.find();
        target.forEach((e) => {
            console.log(getNearFriendsDto.region);
            const latDif = e.region['lat'] - getNearFriendsDto.region['lat'];
            const lngDif = e.region['lng'] - getNearFriendsDto.region['lng'];
            const distance = Math.sqrt(latDif * latDif + lngDif * lngDif);
            if (distance < 5) {
                container.push(e);
            }
        });
        return container;
    }
};
ScanningService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ScanningService);
exports.ScanningService = ScanningService;
//# sourceMappingURL=scanning.service.js.map