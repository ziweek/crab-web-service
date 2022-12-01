"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./entity/users.entity");
const post_entity_1 = require("../posts/entity/post.entity");
const comment_entity_1 = require("../comments/entity/comment.entity");
const friendships_module_1 = require("../friendships/friendships.module");
const friendships_service_1 = require("../friendships/friendships.service");
const friendship_entity_1 = require("../friendships/entity/friendship.entity");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.User, post_entity_1.Post, comment_entity_1.Comment, friendship_entity_1.Friendship]),
            friendships_module_1.FriendshipsModule,
        ],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, friendships_service_1.FriendshipsService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map