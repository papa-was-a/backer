"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const session = require("express-session");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const PORT = process.env.PORT || 7070;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'));
    app.use(session({ secret: '123456', cookie: { maxAge: 60000 } }));
    await app.listen(PORT, () => {
        common_1.Logger.log(`服务已经启动，请访问http://www.localhost:${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map