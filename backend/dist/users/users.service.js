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
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./entity/users.entity");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createUser(createUserDto) {
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
    async requestFriendship(id, requestFriendshipDto) {
        const existedUser = await this.usersRepository.findOne({
            where: { id: id },
        });
        if (existedUser.requesteingFriendIds.includes(requestFriendshipDto.targetId)) {
            return { result: false };
        }
        existedUser.requesteingFriendIds.push(requestFriendshipDto.targetId);
        const targetedUser = await this.usersRepository.findOne({
            where: { id: requestFriendshipDto.targetId },
        });
        if (targetedUser.requestedFriendIds.includes(Number(id))) {
            return { result: false };
        }
        targetedUser.requestedFriendIds.push(Number(id));
        const newExistedUser = await this.usersRepository.save(existedUser);
        const newTargetedUser = await this.usersRepository.save(targetedUser);
        return { newExistedUser, newTargetedUser };
    }
    async acceptFriendship(id, acceptFriendshipDto) {
        const existedUser = await this.usersRepository.findOne({
            where: { id: id },
        });
        if (existedUser.acceptedFriendIds.includes(acceptFriendshipDto.targetId)) {
            return { result: false };
        }
        existedUser.requestedFriendIds = existedUser.requestedFriendIds.filter((e) => {
            e !== id;
        });
        existedUser.acceptedFriendIds.push(acceptFriendshipDto.targetId);
        const targetedUser = await this.usersRepository.findOne({
            where: { id: acceptFriendshipDto.targetId },
        });
        if (targetedUser.acceptedFriendIds.includes(Number(id))) {
            return { result: false };
        }
        targetedUser.requesteingFriendIds =
            targetedUser.requesteingFriendIds.filter((e) => {
                e !== id;
            });
        targetedUser.acceptedFriendIds.push(Number(id));
        const newExistedUser = await this.usersRepository.save(existedUser);
        const newTargetedUser = await this.usersRepository.save(targetedUser);
        return { newExistedUser, newTargetedUser };
    }
    async rejectFriendship(id, rejectFriendshipDto) {
        const existedUser = await this.usersRepository.findOne({
            where: { id: id },
        });
        existedUser.requestedFriendIds = existedUser.requestedFriendIds.filter((e) => {
            Number(e) !== rejectFriendshipDto.targetId;
        });
        const targetedUser = await this.usersRepository.findOne({
            where: { id: rejectFriendshipDto.targetId },
        });
        targetedUser.requesteingFriendIds =
            targetedUser.requesteingFriendIds.filter((e) => {
                Number(e) !== id;
            });
        const newExistedUser = await this.usersRepository.save(existedUser);
        const newTargetedUser = await this.usersRepository.save(targetedUser);
        return { newExistedUser, newTargetedUser };
    }
    async deleteFriendship(id, deleteFriendshipDto) {
        const existedUser = await this.usersRepository.findOne({
            where: { id: id },
        });
        existedUser.acceptedFriendIds = existedUser.acceptedFriendIds.filter((e) => {
            e !== deleteFriendshipDto.targetId;
        });
        const targetedUser = await this.usersRepository.findOne({
            where: { id: deleteFriendshipDto.targetId },
        });
        targetedUser.acceptedFriendIds = targetedUser.acceptedFriendIds.filter((e) => {
            e !== id;
        });
        const newExistedUser = await this.usersRepository.save(existedUser);
        const newTargetedUser = await this.usersRepository.save(targetedUser);
        return { newExistedUser, newTargetedUser };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map