import { makeAutoObservable } from "mobx";
import BannersService from "../services/BannersService";
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from "./constants";
import { IMainBanner } from "../presets/interfaces"



class BannersStore {
    banners:IMainBanner[] = [];
    state = LOADING_STATUS;
    static banners: string[];
    static state: number;

    constructor() {
        makeAutoObservable(this);

        this.fetchBanners();
    }

    setBanners = (banners: IMainBanner[]) => {
        this.banners = banners;
    };

    getBanners = () => {
        return this.banners;
    };

    putBanner = async (
        id:number, 
        img:string,
        head:string,
        button:string,
        href:string,
        href_type:string) => {
        await BannersService.update(id, img, head, button, href, href_type);
    };
    putImg = async (img:string) => {
        await BannersService.upload(img);
    };
    createBanner = async (img:string,
        head:string,
        button:string,
        href:string,
        href_type:string) => {
        await BannersService.post(img, head, button, href, href_type);
    };
    deleteBanner = async (id: number) => {
      try {
          await BannersService.delete(id);
          this.state = COMPLETE_STATUS;
      } catch (error) {
          this.state = ERROR_STATUS;
      }
    };
    fetchBanners = async () => {
      this.banners = [];
      this.state = LOADING_STATUS;
      try {
          const banners = await BannersService.get();
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
