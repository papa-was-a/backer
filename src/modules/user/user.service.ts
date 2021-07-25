import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async userList(): Promise<string>{
        return '用户列表'
    }
    async userDetail(): Promise<string>{
        return '用户详情'
    }
    async addUser(): Promise<string>{
        return '添加用户'
    }
}
