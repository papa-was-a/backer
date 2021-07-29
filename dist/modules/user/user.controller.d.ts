import { UserService } from './user.service';
export declare class UserController {
    protected readonly userService: UserService;
    constructor(userService: UserService);
    postUser(body: any): Promise<string>;
    deleteUser(body: any): Promise<string>;
    putUser(body: any): Promise<string>;
    getUser(): Promise<any[]>;
}
