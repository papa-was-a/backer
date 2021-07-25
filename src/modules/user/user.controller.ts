import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service'
import { LogService } from '../log/log.service'

@Controller('user')
export class UserController {
    constructor(
        protected readonly userService: UserService,
        private readonly logService: LogService
    ){}

    @Get()
    // 接受全部参数
    // async userList(@Query() query: any): Promise<string> {
    // 只接受部分参数
    async userList(@Query('name') query: any): Promise<string> {
        this.logService.log('userList控制器')
        console.log('queryqueryqueryquery', query)
        return await this.userService.userList()
    }
    @Get(":id")
    async userListById(@Param() param: any): Promise<string> {
        console.log('queryqueryqueryquery', param)
        return await this.userService.userDetail()
    }

    @Post()
    async addUser(@Body() body: any) {
        console.log('queryqueryqueryquery', body)
        return await this.userService.addUser()
    }
}
