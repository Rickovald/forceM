import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admins } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admins])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
