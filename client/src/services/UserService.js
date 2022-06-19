import $api from "./index";

export default class AuthService {
  static login = async (login, password) => {
    return await $api.post("/user/login", { login, password });
  }

  static registration = async (name, password) => {
    return await $api.post("/user/registration", { name, password });
  }

  static logout = async () => {
    return await $api.post("/user/logout");
  }
}
