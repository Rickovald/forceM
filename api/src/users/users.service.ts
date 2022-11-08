import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/users/create-user.dto';
import { UpdateUserDTO } from 'src/dto/users/update-user.dto';
import { UserDTO } from 'src/dto/users/user.dto';
import { Admins } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Admins)
    private userRepository: Repository<Admins>,
  ) {}

  private entityToDTO(banner: Admins): UserDTO {
    const bannerDTO = new UserDTO();

    bannerDTO.id = banner.id;
    bannerDTO.name = banner.name;
    bannerDTO.password = banner.password;
    bannerDTO.refreshToken = banner.refreshToken;

    return bannerDTO;
  }

  public async create(createUserRequest: CreateUserDTO): Promise<UserDTO> {
    const banner: Admins = new Admins();
    banner.name = createUserRequest.name;
    banner.password = createUserRequest.password;
    banner.refreshToken = createUserRequest.refreshToken;

    await this.userRepository.save(banner);

    return this.entityToDTO(banner);
  }

  public async findAll(): Promise<UserDTO[]> {
    const banners: Admins[] = await this.userRepository.find();
    const bannersDTO: UserDTO[] = banners.map((x) => this.entityToDTO(x));

    return bannersDTO;
  }

  public async findOne(userId: number) {
    const user: Admins = await this.userRepository.findOneBy({
      id: userId,
    });
    if (!user)
      throw new NotFoundException(`User with id ${userId} was not found`);

    const userReturnDTO = {
      id: user.id,
      name: user.name,
    };
    return userReturnDTO;
  }

  public async update(userId: number, updateUserRequest: UpdateUserDTO) {
    const user: Admins = await this.userRepository.findOneBy({
      id: userId,
    });
    if (!user)
      throw new NotFoundException(`User with id ${userId} was not found`);

    if (updateUserRequest.name) user.name = updateUserRequest.name;
    if (updateUserRequest.password) user.password = updateUserRequest.password;
    if (updateUserRequest.refreshToken)
      user.refreshToken = updateUserRequest.refreshToken;

    await this.userRepository.save(user);

    const userReturnDTO = {
      id: user.id,
      name: user.name,
    };
    return userReturnDTO;
  }

  public async remove(userId: number): Promise<void> {
    const user: Admins = await this.userRepository.findOneBy({
      id: userId,
    });
    if (!user)
      throw new NotFoundException(`User with id ${userId} was not found`);

    await this.userRepository.remove(user);
  }
}
