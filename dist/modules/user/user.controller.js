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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const log_service_1 = require("../log/log.service");
let UserController = class UserController {
    constructor(userService, logService) {
        this.userService = userService;
        this.logService = logService;
    }
    async userList(query) {
        this.logService.log('userList控制器');
        return 'await this.userService.userList()';
    }
    async userListById(param) {
        return await this.userService.userDetail();
    }
    async addUser(body) {
        return await this.userService.addUser();
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userList", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userListById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        log_service_1.LogService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map