export interface ErrorLogModel {
    id: number;
    request_url: string;
    request_data: string;
    request_header: string;
    method: string;
}
declare const ErrorLog: any;
export default ErrorLog;
