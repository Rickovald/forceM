import axios from "axios";
import $api from "./index";
import {API_URL} from "./index";
class BannersService {
  static get = async () => {
    return await $api.get("/banners");
  };
  static post = async (img, head, button, href, href_type) => {
    return await $api.post("/banners", { img, head, button, href, href_type });
  };

  static update = async (id, img, head, button, href, href_type) => {
    return await $api.put(`/banners/${id}`, {
      img,
      head,
      button,
      href,
      href_type,
    });
  };

  static upload = async (img) => {
    return await axios.post(
      `${API_URL}/upload`,
      { img },
      {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    );
  };
  static delete = async (id) => {
    return await $api.delete(`/banners/${id}`);
  };
}

export default BannersService;
