import $api from "./index";

class BannersService {
  static get = async () => {
    return await $api.get("/concerts");
  };
  static post = async (
    concert_name,
    date,
    place,
    group,
    tickets,
    tickets_price,
    city,
    country,
    main_album
  ) => {
    return await $api.post("/concerts", {
      concert_name,
      date,
      place,
      group,
      tickets,
      tickets_price,
      city,
      country,
      main_album,
    });
  };

  static update = async (
    id,
    concert_name,
    date,
    place,
    group,
    tickets,
    tickets_price,
    city,
    country,
    main_album
  ) => {
    return await $api.put(`/concerts/${id}`, {
      concert_name,
      date,
      place,
      group,
      tickets,
      tickets_price,
      city,
      country,
      main_album,
    });
  };

  static delete = async (id) => {
    return await $api.delete(`/concerts/${id}`);
  };
}

export default BannersService;
