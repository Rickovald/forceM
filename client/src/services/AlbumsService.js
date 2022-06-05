import getSetting from "./get.json";
import postSetting from "./post.json";

class AlbumsService {
  static get = async () => {
    return await fetch("http://localhost:5000/albums", getSetting)
    .then(
      (response) => response.json()
    );
  };
  static post = (json) => {
    const settings = {
      ...postSetting,
      body: JSON.stringify({
        name: json.name,
        description: json.description,
        photo: json.photo,
        price: json.price,
      }),
    };

    return fetch("http://localhost:5000/albums", settings);
  };
}

export default AlbumsService;
