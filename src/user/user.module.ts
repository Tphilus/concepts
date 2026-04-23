import { Module } from '@nestjs/common';
import { HelloModule } from 'src/hello/hello.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [HelloModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
