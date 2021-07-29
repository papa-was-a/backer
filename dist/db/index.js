"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seq_1 = require("./seq");
require("./models/index");
(async () => {
    try {
        await seq_1.default.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
(async () => {
    await seq_1.default.sync({ alter: true });
    console.log('sync ok');
})();
//# sourceMappingURL=index.js.map