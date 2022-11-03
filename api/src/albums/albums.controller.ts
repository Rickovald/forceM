import { Controller, Get } from '@nestjs/common';
import { AlbumsService } from './albums.service';

@Controller('/albums')
export class AlbumsController {
    constructor(private readonly albumService: AlbumsService) {}

    create () {

    }
    update () {

    }
    delete () {

    }
    @Get()
    get () {
        return this.albumService.get();
    }
}
