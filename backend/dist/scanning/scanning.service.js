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
        this.getDistance = (region1, region2) => {
            const lat1 = region1.lat;
            const lon1 = region1.lng;
            const lat2 = region2.lat;
            const lon2 = region2.lng;
            if (lat1 == lat2 && lon1 == lon2)
                return 0;
            var radLat1 = (Math.PI * lat1) / 180;
            var radLat2 = (Math.PI * lat2) / 180;
            var theta = lon1 - lon2;
            var radTheta = (Math.PI * theta) / 180;
            var dist = Math.sin(radLat1) * Math.sin(radLat2) +
                Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
            if (dist > 1)
                dist = 1;
            dist = Math.acos(dist);
            dist = (dist * 180) / Math.PI;
            dist = dist * 60 * 1.1515 * 1.609344 * 1000;
            if (dist < 100)
                dist = Math.round(dist / 10) * 10;
            else
                dist = Math.round(dist / 100) * 100;
            return dist;
        };
    }
    async getNearPosts(getNearPostsDto) {
        const container = [];
        const target = await this.postRepository.find();
        target.forEach((e) => {
            const distance = this.getDistance(getNearPostsDto.region, e.region);
            console.log(distance);
            if (distance < 1000) {
                container.push(e);
            }
        });
        return container;
    }
    async getNearUsers(getNearFriendsDto) {
        const container = [];
        const target = await this.userRepository.find();
        target.forEach((e) => {
            const distance = this.getDistance(getNearFriendsDto.region, e.region);
            if (distance < 1000) {
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