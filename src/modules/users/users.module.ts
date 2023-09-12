import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Service
import { UsersService } from './users.service';

// Controller
import { UsersController } from './users.controller';

// Entity
import User from '../../entities/user/user.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      User
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
