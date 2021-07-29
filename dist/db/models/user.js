"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const seq_1 = require("../seq");
const User = seq_1.default.define('user', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: '姓名'
    },
    age: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: '年龄'
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: '城市'
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        comment: '邮箱'
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        comment: '地址'
    }
});
exports.default = User;
//# sourceMappingURL=user.js.map