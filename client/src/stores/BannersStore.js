import { makeAutoObservable } from "mobx";
import BannersService from "../services/BannersService";
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from "./constants";


class BannersStore {
  banners = [];
  state = LOADING_STATUS;

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
    BannersService.post(json);
  };
  *fetchBanners() {
    this.banners = [];
    this.state = LOADING_STATUS;
    try {
      // Yield instead of await.
      const banners = yield BannersService.get();
      this.state = COMPLETE_STATUS;
      this.setBanners(banners.data);
    } catch (error) {
      this.state = ERROR_STATUS;
    }
  }
}

export default new BannersStore();
