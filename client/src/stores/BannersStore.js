import { makeAutoObservable } from "mobx";
import BannersService from "../services/BannersService";

class BannersStore {
  bannersService = new BannersService();
  banners = [];
  constructor() {
    makeAutoObservable(this);

    this.fetchBanners();
  }

  setBanners = (banners) => {
    this.banners = { ...banners };
  };

  getBanners = () => {
    return this.banners;
  };


  uploadBanners = (json) => {
    this.bannersService.post(json);
  };
  *fetchBanners() {
    this.banners = [];
    this.state = "pending";
    try {
      // Yield instead of await.
      const banners = yield this.bannersService.get();
      this.state = "done";
      this.setBanners(banners);
    } catch (error) {
      this.state = "error";
    }
  }
}

export default new BannersStore();
