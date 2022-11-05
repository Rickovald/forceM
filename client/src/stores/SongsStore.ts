import { flow, makeAutoObservable } from 'mobx';
import SongsService from '../services/SongsService';
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from './constants';
import { ISongs } from "../presets/interfaces"

class SongsStore {
    songs: ISongs[] = [];
    state = LOADING_STATUS;

    constructor () {
        makeAutoObservable(this, {
            fetchSongs: flow
        });
        this.fetchSongs();
    }

    setSongs = (songs: ISongs[]) => {
        this.songs = { ...songs };
    };

    getSongs = () => {
        return this.songs;
    };

    putSong = async (id: number, name: string, db_name: string) => {
        await SongsService.put(id, name, db_name);
    };

    createSong = async (id_in_album: number, name: string, album_id: number) => {
        await SongsService.post(id_in_album, name, album_id);
    };

    deleteSong = async (id: number) => {
        await SongsService.delete(id);
    };

    fetchSongs = async () => {
        this.songs = [];
        this.state = LOADING_STATUS;
        try {
            const songs = await SongsService.get();

            this.state = COMPLETE_STATUS;
            this.setSongs(songs.data);
        } catch (error) {
            this.state = ERROR_STATUS;
        }
    }

    updateSongs = async () => {
        this.songs = [];
        this.state = LOADING_STATUS;
        try {
            const songs = await SongsService.get();
            this.state = COMPLETE_STATUS;
            this.setSongs(songs.data);
        } catch (error) {
            this.state = ERROR_STATUS;
        }
    };
}

export default new SongsStore();