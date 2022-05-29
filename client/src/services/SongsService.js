import getSetting from "./get.json";
import postSetting from "./post.json";

class BannersService {
  get = async () => {
    return await fetch("http://localhost:5000/songs", getSetting).then(
      (response) => response.json()
    );
  };
  post = (json) => {
    const settings = {
      ...postSetting,
      body: JSON.stringify({
        id_in_album: json.id_in_album,
        name: json.name,
        album_id : json.album_id,
      }),
    };

    return fetch("http://localhost:5000/songs", settings);
  };
}

export default BannersService;
