import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// config
import TypeORMModule from './orm.config';
import configuration from './config/env';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';


const EnvConfig = ConfigModule.forRoot({
  isGlobal: true,
  load: [configuration]
})

@Module({
  imports: [
    EnvConfig,
    TypeORMModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
