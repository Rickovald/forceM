import { Module } from '@nestjs/common';
import { BannersService } from './banners.service';
import { BannersController } from './banners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banners } from 'src/entity/banner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Banners])],
  providers: [BannersService],
  controllers: [BannersController],
})
export class BannersModule {}
