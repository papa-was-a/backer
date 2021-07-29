"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../../db/models/user");
let UserService = class UserService {
    async postUser(body) {
        const { name, age, city, email, address } = body;
        await user_1.default.create({ name, age, city, email, address });
        return '添加用户成功!!!!';
    }
    async deleteUser() {
        return '用户详情';
    }
    async putUser(body) {
        const { name, age, city, email, address, id } = body;
        await user_1.default.create({ name, age, city, email, address, id });
        return '添加修改成功!!!!';
    }
    async getUser() {
        const userList = user_1.default.findAll({});
        return userList;
    }
};
UserService = __decorate([
    common_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map