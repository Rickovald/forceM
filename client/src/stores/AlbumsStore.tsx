import { flow, makeAutoObservable } from 'mobx';
import AlbumsService from '../services/AlbumsService';
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from './constants';

class AlbumsStore {
    albums = [];
    state = LOADING_STATUS;

    constructor () {
        makeAutoObservable(this, {
            fetchAlbums: flow
        });
        this.fetchAlbums();
    }

    setAlbums = (albums) => {
        this.albums = albums;
    };

    getAlbums = () => {
        return this.albums;
    };

    putAlbum = async (id, name, year, href, image, desc) => {
        await AlbumsService.update(id, name, year, href, image, desc);
    };

    createAlbum = async (name, year, href, image, desc) => {
        await AlbumsService.post(name, year, href, image, desc);
    };

    deleteAlbum = async (id) => {
        await AlbumsService.delete(id);
    };

    * fetchAlbums () {
        this.state = LOADING_STATUS;
        try {
            const albums = yield AlbumsService.get();
            this.state = COMPLETE_STATUS;
            this.setAlbums(albums.data.data);
        } catch (error) {
            this.state = ERROR_STATUS;
        }
    }
}

export default new AlbumsStore();