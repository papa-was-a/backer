"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const seq_1 = require("../seq");
const ErrorLog = seq_1.default.define('ErrorLog', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true
    },
    request_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: '请求地址'
    },
    request_data: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: '请求数据'
    },
    request_header: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: '请求头'
    },
    method: {
        type: sequelize_1.DataTypes.STRING,
        comment: '请求方法'
    }
});
exports.default = ErrorLog;
//# sourceMappingURL=request.js.map