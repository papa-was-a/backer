import { Controller, Get, Query, Param, Post, Body, Render, Response } from '@nestjs/common';
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
        return await this.userService.userList()
    }
    @Get("/:id")
    async userListById(@Param() param: any): Promise<string> {
        return await this.userService.userDetail()
    }

    @Post()
    async addUser(@Body() body: any) {
        return await this.userService.addUser()
    }

    @Get('login')
    @Render('login')
    loginPage() {
        return {"title": "Login Page"}
    }
    @Post('login')
    login(@Body() body, @Response() res) {
        // 如果在控制器函数中使用了@Response()就不能使用 return 返回值
        res.redirect('/user')
    }
}
