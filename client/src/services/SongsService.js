import $api from "./index";

class SongsService {
  static get = async () => {
    return await $api.get("/songs").then((data) => data.json());
    // fetch("http://localhost:5000/songs", getSetting).then(
    //   (response) => response.json()
    // );
  };
  static post = async (id_in_album, name, album_id) => {

    return await $api.post("/songs", { id_in_album, name, album_id });
    // fetch("http://localhost:5000/songs", settings);
  };
}

export default SongsService;
