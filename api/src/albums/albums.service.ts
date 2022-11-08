import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumDTO } from 'src/dto/album/album.dto';
import { CreateAlbumDTO } from 'src/dto/album/create-album.dto';
import { UpdateAlbumDTO } from 'src/dto/album/update-album.dto';
import { Discography } from 'src/entity/album.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Discography)
    private albumRepository: Repository<Discography>,
  ) {}

  private entityToDTO(album: Discography): AlbumDTO {
    const albumDTO = new AlbumDTO();

    albumDTO.id = album.id;
    albumDTO.name = album.name;
    albumDTO.year = album.year;
    albumDTO.href = album.href;
    albumDTO.image = album.image;
    albumDTO.desc = album.desc;

    return albumDTO;
  }

  public async create(createAlbumRequest: CreateAlbumDTO): Promise<AlbumDTO> {
    const album: Discography = new Discography();
    album.name = createAlbumRequest.name;
    album.year = createAlbumRequest.year;
    album.href = createAlbumRequest.href;
    album.image = createAlbumRequest.image;
    album.desc = createAlbumRequest.desc;

    await this.albumRepository.save(album);

    return this.entityToDTO(album);
  }

  public async update(albumId: number, updateAlbumRequest: UpdateAlbumDTO) {
    const album: Discography = await this.getOne(albumId);

    if (updateAlbumRequest.name) album.name = updateAlbumRequest.name;
    if (updateAlbumRequest.year) album.year = updateAlbumRequest.year;
    if (updateAlbumRequest.href) album.href = updateAlbumRequest.href;
    if (updateAlbumRequest.image) album.image = updateAlbumRequest.image;
    if (updateAlbumRequest.desc) album.desc = updateAlbumRequest.desc;

    await this.albumRepository.save(album);

    const albumDTO: AlbumDTO = this.entityToDTO(album);
    return albumDTO;
  }

  public async delete(albumId: number) {
    const album: Discography = await this.getOne(albumId);

    await this.albumRepository.remove(album);
  }

  public async get(): Promise<AlbumDTO[]> {
    const albums: Discography[] = await this.albumRepository.find();
    const albumsDTO: AlbumDTO[] = albums.map((x) => this.entityToDTO(x));

    return albumsDTO;
  }

  public async getOne(albumId: number): Promise<AlbumDTO | undefined> {
    const album: Discography = await this.albumRepository.findOneBy({
      id: albumId,
    });
    if (!album)
      throw new NotFoundException(`Album with id ${albumId} was not found`);

    const albumDTO: AlbumDTO = this.entityToDTO(album);
    return albumDTO;
  }
}
