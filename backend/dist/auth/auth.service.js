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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const users_entity_1 = require("../users/entity/users.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const friendship_entity_1 = require("../friendships/entity/friendship.entity");
const friendships_service_1 = require("../friendships/friendships.service");
const createFriendshipDto_1 = require("../friendships/dto/createFriendshipDto");
let AuthService = class AuthService {
    constructor(userRepository, friendshipRepository, friendshipsService, jwtService) {
        this.userRepository = userRepository;
        this.friendshipRepository = friendshipRepository;
        this.friendshipsService = friendshipsService;
        this.jwtService = jwtService;
    }
    async transformPassword(registerAccountDto) {
        registerAccountDto.password = await bcrypt.hash(registerAccountDto.password, 10);
        return registerAccountDto;
    }
    async registerNewAccount(registerAccountDto) {
        const existedUser = await this.userRepository.findOne({
            where: { email: registerAccountDto.email },
        });
        if (existedUser) {
            throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
        }
        const registerAccountDtoHashed = await this.transformPassword(registerAccountDto);
        const emptyCreateFriendshipDto = new createFriendshipDto_1.CreateFriendshipDto();
        emptyCreateFriendshipDto.requestedFriends = [];
        emptyCreateFriendshipDto.acceptedFriends = [];
        const createdFriendship = await this.friendshipsService.createOneFriendship(emptyCreateFriendshipDto);
        await this.userRepository.save(registerAccountDtoHashed);
        const savedUser = await this.userRepository.findOne({
            where: { email: registerAccountDto.email },
        });
        const savedFriendship = await this.friendshipRepository.findOne({
            where: { id: createdFriendship.id },
        });
        savedUser.friendship = savedFriendship;
        savedFriendship.user = savedUser;
        await this.userRepository.save(savedUser);
        await this.userRepository.save(savedFriendship);
        const payload = { email: registerAccountDto.email };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
    async validateAccount(validateAccountDto) {
        const existedUser = await this.userRepository.findOne({
            where: { email: validateAccountDto.email },
        });
        const validatePassword = await bcrypt.compare(validateAccountDto.password, existedUser.password);
        if (!existedUser || !validatePassword) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { email: validateAccountDto.email };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
    async tokenValidateUser(payload) {
        return await this.userRepository.findOne({
            where: { email: payload.email },
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(friendship_entity_1.Friendship)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        friendships_service_1.FriendshipsService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map