import { Model, Optional } from 'sequelize';
export interface ErrorLogModel {
    id: number;
    request_url: string;
    request_data: string;
    request_header: string;
    method: string;
}
interface ErrorLogAttributes extends Optional<ErrorLogModel, "id"> {
}
interface ErrorLogInstance extends Model<ErrorLogModel, ErrorLogAttributes>, ErrorLogModel {
}
declare const ErrorLog: import("sequelize").ModelCtor<ErrorLogInstance>;
export default ErrorLog;
