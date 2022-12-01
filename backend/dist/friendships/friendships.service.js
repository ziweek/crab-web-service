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
exports.FriendshipsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entity/users.entity");
const typeorm_2 = require("typeorm");
const friendship_entity_1 = require("./entity/friendship.entity");
let FriendshipsService = class FriendshipsService {
    constructor(friendshipsRepository, usersRepository) {
        this.friendshipsRepository = friendshipsRepository;
        this.usersRepository = usersRepository;
    }
    async findAllFriendship() {
        return await this.friendshipsRepository.find();
    }
    async findOneFriendship(id) {
        return await this.friendshipsRepository.findOne({ where: { id: id } });
    }
    async createOneFriendship(createFriendshipDto) {
        return await this.friendshipsRepository.save(createFriendshipDto);
    }
};
FriendshipsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(friendship_entity_1.Friendship)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FriendshipsService);
exports.FriendshipsService = FriendshipsService;
//# sourceMappingURL=friendships.service.js.map