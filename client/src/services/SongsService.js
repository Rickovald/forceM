import $api from "./index";

class SongsService {
  static get = async () => {
    return await $api.get("/songs");
  };
  static post = async (id_in_album, name, album_id) => {
    return await $api.post("/songs", { id_in_album, name, album_id });
  };
}

export default SongsService;
