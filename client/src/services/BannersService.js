import $api from "./index";

class BannersService {
  static get = async () => {
    return await $api.get("/banners");
  };
  static post = async (name, description, photo, price) => {
    return await $api.post("/banners", { name, description, photo, price });
  };
}

export default BannersService;
