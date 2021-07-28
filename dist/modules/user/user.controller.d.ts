import { UserService } from './user.service';
export declare class UserController {
    protected readonly userService: UserService;
    constructor(userService: UserService);
    index(req: {
        [key: string]: any;
    }): string;
    login(res: {
        [key: string]: any;
    }, req: {
        [key: string]: any;
    }): void;
}
