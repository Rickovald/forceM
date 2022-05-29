import getSetting from "./get.json";
import postSetting from "./post.json";

class BannersService {
  get = async () => {
    return await fetch("http://localhost:5000/concerts", getSetting).then(
      (response) => response.json()
    );
  };
  post = (json) => {
    const settings = {
      ...postSetting,
      body: JSON.stringify({
        date: json.date,
        country: json.country,
        tickets: json.tickets,
        tickets_price: json.tickets_price,
        city: json.city,
        place: json.place,
        group : json.group,
      }),
    };

    return fetch("http://localhost:5000/concerts", settings);
  };
}

export default BannersService;
