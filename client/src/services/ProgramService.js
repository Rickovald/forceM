import $api from "./index";

class ProgramsService {
  static get = async () => {
    return await $api.get("/programs");
  };

  static post = async (name, difficulty, comments, place, concert_name) => {
    return await $api.post("/programs", {
      name,
      difficulty,
      comments,
      place,
      concert_name,
    });
  };

  static put = async (id, data, name) => {
    return await $api.put(`/programs/${id}`, {data, name});
  };

  static delete = async (id) => {
    return await $api.delete(`/programs/${id}`);
  };
}

export default ProgramsService;
