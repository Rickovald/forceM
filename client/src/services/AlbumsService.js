import $api from "./index";

class AlbumsService {
  static get = async () => {
    return await $api.get("/albums")
  };
  static post = async (name, description, photo, price) => {
    return await $api.post("/albums", {name, description, photo, price});
  };
}

export default AlbumsService;
