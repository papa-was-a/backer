import { Model, Optional } from 'sequelize';
export interface UserModel {
    id: number;
    name: string;
    age: number;
    city: string;
    email: string;
    address: string;
}
interface UserAttributes extends Optional<UserModel, "id"> {
}
interface UserInstance extends Model<UserModel, UserAttributes>, UserModel {
}
declare const User: import("sequelize").ModelCtor<UserInstance>;
export default User;
