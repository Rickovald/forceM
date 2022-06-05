import { flow, makeAutoObservable } from "mobx";
import AlbumsService from "../services/AlbumsService";
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from "./constants";

class AlbumsStore {
  albums = [];
  state = LOADING_STATUS;

  constructor() {
    makeAutoObservable(this, {
      fetchAlbums: flow,
    });
    this.fetchAlbums();
  }
  setAlbums = (albums) => {
    this.albums = albums;

  };
  getAlbums = () => {
    return this.albums;
  };
  // Note the star, this a generator function!
  *fetchAlbums() {
    this.state = LOADING_STATUS;
    try {
      // Yield instead of await.
      const albums = yield AlbumsService.get();
      this.state = COMPLETE_STATUS;
      this.setAlbums(albums);
    } catch (error) {
      this.state = ERROR_STATUS;
    }
  }
}

export default new AlbumsStore();
