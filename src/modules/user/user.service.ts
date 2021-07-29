import { Injectable } from '@nestjs/common';
import User from '../../db/models/user'

@Injectable()
export class UserService {
    async postUser(body): Promise<string>{
        const { name, age, city, email, address } = body
        await User.create({ name, age, city, email, address })
        return '添加用户成功!!!!'
    }
    async deleteUser(): Promise<string>{
        return '用户详情'
    }
    async putUser(body): Promise<string>{
        const { name, age, city, email, address, id } = body
        await User.create({ name, age, city, email, address, id })
        return '添加修改成功!!!!'
    }
    async getUser(): Promise<any[]>{
        const userList = User.findAll({
            
          });
        return userList
    }
}
