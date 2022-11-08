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

  public async create(
    createBannerRequest: CreateBannerDTO,
  ): Promise<BannerDTO> {
    const banner: Banners = new Banners();
    banner.img = createBannerRequest.img;
    banner.head = createBannerRequest.head;
    banner.button = createBannerRequest.button;
    banner.href = createBannerRequest.href;
    banner.href_type = createBannerRequest.href_type;

    await this.bannerRepository.save(banner);

    return this.entityToDTO(banner);
  }

  public async update(
    bannerId: number,
    updateBannerRequest: UpdateBannerDTO,
  ): Promise<BannerDTO> {
    const banner: Banners = await this.getOne(bannerId);

    if (updateBannerRequest.img) banner.img = updateBannerRequest.img;
    if (updateBannerRequest.head) banner.head = updateBannerRequest.head;
    if (updateBannerRequest.button) banner.button = updateBannerRequest.button;
    if (updateBannerRequest.href) banner.href = updateBannerRequest.href;
    if (updateBannerRequest.href_type)
      banner.href_type = updateBannerRequest.href_type;

    await this.bannerRepository.save(banner);

    const bannerDTO: BannerDTO = this.entityToDTO(banner);
    return bannerDTO;
  }

  public async delete(bannerId: number): Promise<void> {
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
      throw new NotFoundException(`Banner with id ${bannerId} was not found`);

    const bannerDTO: BannerDTO = this.entityToDTO(banner);
    return bannerDTO;
  }
}
