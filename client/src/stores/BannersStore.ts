import { makeAutoObservable } from "mobx";
import BannersService from "../services/BannersService";
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from "./constants";


class BannersStore {
    banners = [];
    state = LOADING_STATUS;
    static banners: string[];
    static state: number;

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

    putBanner = async (id, img, head, button, href, href_type) => {
        await BannersService.update(id, img, head, button, href, href_type);
    };
    putImg = async (img) => {
        await BannersService.upload(img);
    };
    createBanner = async (img, head, button, href, href_type) => {
        await BannersService.post(img, head, button, href, href_type);
    };
    deleteBanner = async (id) => {
      try {
          await BannersService.delete(id);
          this.state = COMPLETE_STATUS;
      } catch (error) {
          this.state = ERROR_STATUS;
      }
    };
    *fetchBanners() {
      this.banners = [];
      this.state = LOADING_STATUS;
      try {
          const banners = yield BannersService.get();
          this.state = COMPLETE_STATUS;
          this.setBanners(banners.data.data);
      } catch (error) {
          this.state = ERROR_STATUS;
      }
    }
    updateBanners = async () => {
      this.banners = [];
      this.state = LOADING_STATUS;
      try {
          const banners = await BannersService.get();
          this.state = COMPLETE_STATUS;
          this.setBanners(banners.data.data);
      } catch (error) {
          this.state = ERROR_STATUS;
      }
    };
}

export default new BannersStore();
