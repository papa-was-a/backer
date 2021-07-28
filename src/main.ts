import 'dotenv/config'
// import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'
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
  // app.use(cookieParser('this is secret'))
  app.use(session({secret: '123456', cookie: {maxAge: 60000}}))

  await app.listen(PORT, () => {
    Logger.log(`服务已经启动，请访问http://www.localhost:${PORT}`)
  });
}
bootstrap();
