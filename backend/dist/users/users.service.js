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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const createFriendshipDto_1 = require("../friendships/dto/createFriendshipDto");
const friendship_entity_1 = require("../friendships/entity/friendship.entity");
const friendships_service_1 = require("../friendships/friendships.service");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./entity/users.entity");
let UsersService = class UsersService {
    constructor(friendshipsService, usersRepository, friendshipsRepository) {
        this.friendshipsService = friendshipsService;
        this.usersRepository = usersRepository;
        this.friendshipsRepository = friendshipsRepository;
    }
    async createUser(createUserDto) {
        const savedUser = await this.usersRepository.save(createUserDto);
        const emptyCreateFriendshipDto = new createFriendshipDto_1.CreateFriendshipDto();
        emptyCreateFriendshipDto.acceptedFriends = [];
        emptyCreateFriendshipDto.requestedFriends = [];
        const savedFriendship = await this.friendshipsService.createOneFriendship(emptyCreateFriendshipDto);
        savedUser.friendship = savedFriendship;
        return await this.usersRepository.save(createUserDto);
    }
    async findAllUsers() {
        return await this.usersRepository.find();
    }
    async findOneUser(id) {
        return await this.usersRepository.findOne({ where: { id: id } });
    }
    async deleteUser(id) {
        await this.usersRepository.delete(id);
    }
    async updateUser(id, createUserDto) {
        const existedUser = this.usersRepository.findOne({ where: { id: id } });
        if (existedUser) {
            await this.usersRepository.update(id, {
                name: createUserDto.name,
                phone: createUserDto.phone,
                email: createUserDto.email,
                password: createUserDto.password,
                nickname: createUserDto.nickname,
                text: createUserDto.text,
                profileImg: createUserDto.profileImg,
                region: createUserDto.region,
            });
        }
    }
    async requestFriendship(id, addFriendDto) {
        const existedUser = await this.usersRepository.findOne({
            where: { id: id },
        });
        const friendshipId = existedUser.friendship.id;
        const existedFriendship = await this.friendshipsRepository.findOne({
            where: { id: friendshipId },
        });
        const targetUser = await this.usersRepository.findOne({
            where: { id: addFriendDto.targetId },
        });
        existedFriendship.requestedFriends[existedFriendship.requestedFriends.length] = targetUser;
        await this.usersRepository.save(existedFriendship);
        existedUser.friendship = existedFriendship;
        return await this.usersRepository.save(existedUser);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(friendship_entity_1.Friendship)),
    __metadata("design:paramtypes", [friendships_service_1.FriendshipsService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map