import { AxiosResponse } from 'axios';
import { flow, makeAutoObservable } from 'mobx';
import AlbumsService from '../services/AlbumsService';
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from './constants';
import { IAlbum } from "../presets/interfaces"


class AlbumsStore {
    albums:IAlbum[] = [];
    state = LOADING_STATUS;

    constructor () {
        makeAutoObservable(this, {
            fetchAlbums: flow
        });
        this.fetchAlbums();
    }

    setAlbums = (albums: IAlbum[]) => {
        this.albums = albums;
    };

    getAlbums = () => {
        return this.albums;
    };

    putAlbum = async (
        id: number,
        name: string,
        year: string,
        href: string,
        image: string,
        desc: string
        ) => {
        await AlbumsService.update(id, name, year, href, image, desc);
    };

    createAlbum = async (
        name: string,
        year: string,
        href: string,
        image: string,
        desc: string) => {
        await AlbumsService.post(name, year, href, image, desc);
    };

    deleteAlbum = async (id: number) => {
        await AlbumsService.delete(id);
    };

    fetchAlbums = async () => {
        this.state = LOADING_STATUS;
        try {
            const albums = await AlbumsService.get();
            this.state = COMPLETE_STATUS;
            this.setAlbums(albums.data.data);
        } catch (error) {
            this.state = ERROR_STATUS;
        }
    }
}

export default new AlbumsStore();