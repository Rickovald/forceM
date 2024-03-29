import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discography } from 'src/entity/album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Discography])],
  providers: [AlbumsService],
  controllers: [AlbumsController],
})
export class AlbumsModule {}
