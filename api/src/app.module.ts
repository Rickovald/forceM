import { Module } from '@nestjs/common';
import { AlbumsModule } from './albums/albums.module';
import { DatabaseModule } from './database/database.module';
import { BannersModule } from './banners/banners.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, AlbumsModule, BannersModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
