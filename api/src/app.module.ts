import { Module } from '@nestjs/common';
import { AlbumsModule } from './albums/albums.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    AlbumsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
