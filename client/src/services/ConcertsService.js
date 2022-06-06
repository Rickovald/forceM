import $api from "./index";

class BannersService {
  static get = async () => {
    return await $api.get("/concerts");
  };
  static post = async (date, country, tickets, tickets_price, city, place, group) => {
    return await $api.post("/concerts",  { date, country, tickets, tickets_price, city, place, group });
  };
}

export default BannersService;
