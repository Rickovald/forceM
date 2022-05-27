import getSetting from "./get.json";
import postSetting from "./post.json";

class BannersService {
  get = async () => {
    return await fetch("http://localhost:5000/banners", getSetting).then((response) =>
      response.json()
    );
  };
  post = (json) => {
    const settings = {
      ...postSetting,
      body: JSON.stringify({
        name: json.name,
        description: json.description,
        photo: json.photo,
        price: json.price,
      }),
    };
    return fetch("http://localhost:5000/banners", settings);
  };
}

export default BannersService;
