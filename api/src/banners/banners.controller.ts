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
import { CreateBannerDTO } from 'src/dto/banners/create-banner.dto';
import { UpdateBannerDTO } from 'src/dto/banners/update-banner.dto';
import { BannersService } from './banners.service';

@Controller('banners')
export class BannersController {
  constructor(private readonly bannerService: BannersService) {}

  @Post()
  public async create(@Body() createBannerRequest: CreateBannerDTO) {
    return await this.bannerService.create(createBannerRequest);
  }

  @Put('/:id')
  public async update(
    @Param('id') bannerId: number,
    @Body() updateBannerRequest: UpdateBannerDTO,
  ) {
    return await this.bannerService.update(bannerId, updateBannerRequest);
  }

  @Get()
  public async get() {
    return await this.bannerService.get();
  }

  @Get('/:id')
  public async getOne(@Param('id') bannerId: number) {
    return await this.bannerService.getOne(bannerId);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') bannerId: number) {
    await this.bannerService.delete(bannerId);
  }
}
