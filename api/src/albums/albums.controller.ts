import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateAlbumDTO } from 'src/dto/album/create-album.dto';
import { UpdateAlbumDTO } from 'src/dto/album/update-album.dto';
import { AlbumsService } from './albums.service';

@Controller('/albums')
export class AlbumsController {
  constructor(private readonly albumService: AlbumsService) {}

  @Post()
  public async create(@Body() createAlbumRequest: CreateAlbumDTO) {
    return await this.albumService.create(createAlbumRequest);
  }

  @Put('/:id')
  public async update(
    @Param('id') albumId: number,
    @Body() updateAlbumRequest: UpdateAlbumDTO,
  ) {
    return await this.albumService.update(albumId, updateAlbumRequest);
  }

  @Get()
  public async get() {
    return await this.albumService.get();
  }

  @Get('/:id')
  public async getOne(@Param('id') albumId: number) {
    return await this.albumService.getOne(albumId);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') albumId: number) {
    await this.albumService.delete(albumId);
  }
}
