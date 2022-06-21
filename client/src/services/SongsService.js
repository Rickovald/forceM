import $api from "./index";

class SongsService {
  static get = async () => {
    return await $api.get("/songs");
  };
  static post = async (id_in_album, name, album_id) => {
    return await $api.post("/songs", { id_in_album, name, album_id });
  };
  static put = async (id, name, db_name) => {
    return await $api.put(`/songs/${id}`, {name, db_name});
  };
  static delete = async (id) => {
    return await $api.delete(`/songs/${id}`);
  };
}

export default SongsService;
