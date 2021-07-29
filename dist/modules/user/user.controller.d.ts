import { UserService } from './user.service';
export declare class UserController {
    protected readonly userService: UserService;
    constructor(userService: UserService);
    index(req: {
        [key: string]: any;
    }): string;
    addUser(body: any): Promise<string>;
}
