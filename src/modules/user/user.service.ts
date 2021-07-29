import { Injectable } from '@nestjs/common';
import ErrorLog from '../../db/models/request'

@Injectable()
export class UserService {
    async userList(): Promise<string>{
        return '用户列表'
    }
    async userDetail(): Promise<string>{
        return '用户详情'
    }
    async addUser(body): Promise<string>{
        console.log(body);
        
        ErrorLog.create({
            request_url: Date.now().toString(),
            request_data: '222',
            request_header: '333',
            method: '444'
        })
        return '添加用户成功!!!!'
    }
}
