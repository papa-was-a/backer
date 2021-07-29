import { Controller, Get, Request, Response } from '@nestjs/common';
import { UserService } from './user.service'
import { LogService } from '../log/log.service'

@Controller('user')
export class UserController {
    constructor(
        protected readonly userService: UserService,
        // private readonly logService: LogService
    ){}

    @Get()
    index(@Request() req:{[key: string]: any}):string {
        // console.log(req.cookies.name, '当前cookie')
        console.log(req.session)
        return '用户主页'
    }

    @Get('login')
    login(
        @Response() res: {[key: string]: any},
        @Request() req: {[key: string]: any}
    ): void {
        // res.cookie('name', 'hello', {maxAge: 5 * 1000, httpOnly: true, signed: true})
        req.session.name = 'hello'
        res.send('登录页面')
    }
    // 接受全部参数
    // async userList(@Query() query: any): Promise<string> {
    // 只接受部分参数
    // async userList(@Query('name') query: any): Promise<string> {
    //     this.logService.log('userList控制器')
    //     return 'hello world'
    // }
    @Get("/:id")
    async userListById(): Promise<string> {
        return await this.userService.userDetail()
    }

    // @Post()
    // async addUser(@Body() body: any) {
    //     return await this.userService.addUser()
    // }
}
