import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'

import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'

const PORT = process.env.PORT || 7070

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'))

  // app.setViewEngine('ejs')

  await app.listen(PORT, () => {
    Logger.log(`服务已经启动，请访问http://www.localhost:${PORT}`)
  });
}
bootstrap();
