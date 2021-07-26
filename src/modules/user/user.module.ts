import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LogModule } from '../log/log.module';

@Module({
  controllers: [UserController],
  imports: [LogModule.register('user')],
  providers: [UserService]
})
export class UserModule {}
