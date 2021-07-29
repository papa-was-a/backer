"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('backer_db', 'root', 'o8Justin1993?', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+08:00',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
exports.default = sequelize;
//# sourceMappingURL=seq.js.map