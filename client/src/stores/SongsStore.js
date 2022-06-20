import { flow, makeAutoObservable } from "mobx";
import SongsService from "../services/SongsService";
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from "./constants";

class SongsStore {
  songs = [];
  state = LOADING_STATUS;

  constructor() {
    makeAutoObservable(this, {
      fetchSongs: flow,
    });
    this.fetchSongs();
  }
  setSongs = (songs) => {
    this.songs = { ...songs };
  };
  getSongs = () => {
    return this.songs;
  };
  putSong = async (id, name) => {
    await SongsService.put(id, name);
  };
  createSong = async (id_in_album, name, album_id) => {
    await SongsService.post(id_in_album, name, album_id);
  };
  deleteSong = async (id) => {
    await SongsService.delete(id);
  };
  // Note the star, this a generator function!
  *fetchSongs() {
    this.songs = [];
    this.state = LOADING_STATUS;
    try {
      // Yield instead of await.
      const songs = yield SongsService.get();

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
