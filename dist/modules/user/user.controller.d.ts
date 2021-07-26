import { UserService } from './user.service';
import { LogService } from '../log/log.service';
export declare class UserController {
    protected readonly userService: UserService;
    private readonly logService;
    constructor(userService: UserService, logService: LogService);
    userList(query: any): Promise<string>;
    userListById(param: any): Promise<string>;
    addUser(body: any): Promise<string>;
    loginPage(): {
        title: string;
    };
    login(body: any, res: any): void;
}
