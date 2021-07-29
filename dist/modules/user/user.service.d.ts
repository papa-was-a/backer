export declare class UserService {
    postUser(body: any): Promise<string>;
    deleteUser(): Promise<string>;
    putUser(body: any): Promise<string>;
    getUser(): Promise<any[]>;
}
