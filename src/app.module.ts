import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi, * as joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes configmodule globally available
      validationSchema: joi.object({
        APP_NAME: Joi.string().default('defaultApp'),
      }),
    }),
    HelloModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
