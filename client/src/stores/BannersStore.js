import { makeAutoObservable } from "mobx";
import BannersService from "../services/BannersService";

class BannersStore {
  bannersService = new BannersService();
  banners = [];
  constructor() {
    makeAutoObservable(this);

    this.loadBanners();
  }

  setBanners = (banners) => {
    this.banners = { ...banners };
  };

  getBanners = () => {
    return this.banners;
  };

  loadBanners =  () => {
    this.bannersService.get()
        .then(response => response.json())
        .then(json => {
            this.setBanners(json)
        })
        .catch(err => {
            console.error(err)
        })
  };
  uploadBanners = (json) => {
    console.log(json);
    this.bannersService.post(json)
};
}

export default new BannersStore();
