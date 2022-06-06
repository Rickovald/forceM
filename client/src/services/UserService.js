import $api from "./index";

export default class AuthService {
  static async login(login, password) {
    return await $api.post("/login", { login, password });
  }

  static async registration(name, password) {
    return await $api.post("/user", { name, password });
  }

  static async logout() {
    return await $api.post("/logout");
  }
}
