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
  // Note the star, this a generator function!
  *fetchSongs() {
    this.songs = [];
    this.state = LOADING_STATUS;
    try {
      // Yield instead of await.
      const songs = yield SongsService.get();
      console.log(songs);

      this.state = COMPLETE_STATUS;
      this.setSongs(songs);
    } catch (error) {
      this.state = ERROR_STATUS;
    }
  }
}

export default new SongsStore();
