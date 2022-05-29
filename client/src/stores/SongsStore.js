import { flow, makeAutoObservable } from "mobx";
import SongsService from "../services/SongsService";

class SongsStore {
  songsService = new SongsService();

  songs = [];
  state = "pending";

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
    this.state = "pending";
    try {
      // Yield instead of await.
      const songs = yield this.songsService.get();
      this.state = "done";
      this.setSongs(songs);
    } catch (error) {
      this.state = "error";
    }
  }
}

export default new SongsStore();
