import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BannerDTO } from 'src/dto/banners/banner.dto';
import { CreateBannerDTO } from 'src/dto/banners/create-banner.dto';
import { UpdateBannerDTO } from 'src/dto/banners/update-banner.dto';
import { Banners } from 'src/entity/banner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BannersService {
  constructor(
    @InjectRepository(Banners)
    private bannerRepository: Repository<Banners>,
  ) {}

  private entityToDTO(banner: Banners): BannerDTO {
    const bannerDTO = new BannerDTO();

    bannerDTO.id = banner.id;
    bannerDTO.img = banner.img;
    bannerDTO.head = banner.head;
    bannerDTO.button = banner.button;
    bannerDTO.href = banner.href;
    bannerDTO.href_type = banner.href_type;

    return bannerDTO;
  }

  public async create(createAlbumRequest: CreateBannerDTO): Promise<BannerDTO> {
    const banner: Banners = new Banners();
    banner.img = createAlbumRequest.img;
    banner.head = createAlbumRequest.head;
    banner.button = createAlbumRequest.button;
    banner.href = createAlbumRequest.href;
    banner.href_type = createAlbumRequest.href_type;

    await this.bannerRepository.save(banner);

    return this.entityToDTO(banner);
  }

  public async update(bannerId: number, updateAlbumRequest: UpdateBannerDTO) {
    const banner: Banners = await this.getOne(bannerId);

    if (updateAlbumRequest.img) banner.img = updateAlbumRequest.img;
    if (updateAlbumRequest.head) banner.head = updateAlbumRequest.head;
    if (updateAlbumRequest.button) banner.button = updateAlbumRequest.button;
    if (updateAlbumRequest.href) banner.href = updateAlbumRequest.href;
    if (updateAlbumRequest.href_type)
      banner.href_type = updateAlbumRequest.href_type;

    await this.bannerRepository.save(banner);

    const bannerDTO: BannerDTO = this.entityToDTO(banner);
    return bannerDTO;
  }

  public async delete(bannerId: number) {
    const banner: Banners = await this.getOne(bannerId);

    await this.bannerRepository.remove(banner);
  }

  public async get(): Promise<BannerDTO[]> {
    const banners: Banners[] = await this.bannerRepository.find();
    const bannersDTO: BannerDTO[] = banners.map((x) => this.entityToDTO(x));

    return bannersDTO;
  }

  public async getOne(bannerId: number): Promise<BannerDTO | undefined> {
    const banner: Banners = await this.bannerRepository.findOneBy({
      id: bannerId,
    });
    if (!banner)
      throw new NotFoundException(`Album with id ${bannerId} was not found`);

    const bannerDTO: BannerDTO = this.entityToDTO(banner);
    return bannerDTO;
  }
}
