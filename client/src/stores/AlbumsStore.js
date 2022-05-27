import { flow, makeAutoObservable } from "mobx";
import AlbumsService from "../services/AlbumsService";

class AlbumsStore {
  albumsService = new AlbumsService();

  albums = [];
  state = "pending";

  constructor() {
    makeAutoObservable(this, {
      fetchAlbums: flow,
    });
    this.fetchAlbums();
  }
  setAlbums = (albums) => {
    this.albums = { ...albums };
  };
  getAlbums = () => {
    return this.albums;
  };
  // Note the star, this a generator function!
  *fetchAlbums() {
    this.albums = [];
    this.state = "pending";
    try {
      // Yield instead of await.
      const albums = yield this.albumsService.get();
      this.state = "done";
      this.setAlbums(albums);
    } catch (error) {
      this.state = "error";
    }
  }
}

export default new AlbumsStore();
