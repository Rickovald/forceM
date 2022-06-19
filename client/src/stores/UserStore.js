import { makeAutoObservable } from "mobx";
import UserService from "../services/UserService";
import axios from "axios";
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from "./constants";

class UserStore {
  isAuth = false;
  state = LOADING_STATUS;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth = (bool) => {
    this.isAuth = bool;
  };
  getAuth = () => {
    return this.isAuth;
  };
  setUser = (user) => {
    this.user = user;
  };

  login = async (email, password) => {
    this.state = LOADING_STATUS;
    try {
      const response = await UserService.login(email, password);
      console.log(response.data);
      if (response.data.user) {
        this.setAuth(true);
        this.setUser(response.data.user);
        localStorage.setItem("token", response.data.accessToken);
      } else {
        return response.data
      }
      this.state = COMPLETE_STATUS;
    } catch (e) {
      console.log(e.response);
      this.state = ERROR_STATUS;
      console.log(e.response?.data?.message);
    }
  };

  registration = async (email, password) => {
    this.state = LOADING_STATUS;
    try {
      const response = await UserService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      this.state = COMPLETE_STATUS;
    } catch (e) {
      this.state = ERROR_STATUS;
      console.log(e.response?.data?.message);
    }
  };

  logout = async () => {
    this.state = LOADING_STATUS;
    try {
      await UserService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({});
      this.state = COMPLETE_STATUS;
    } catch (e) {
      this.state = ERROR_STATUS;
      console.log(e.response?.data?.message);
    }
  };

  checkAuth = async () => {
    this.state = LOADING_STATUS;
    try {
      const response = await axios.get(`http://localhost:5000/user/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      this.state = ERROR_STATUS;
      console.log(e.response?.data?.message);
    } finally {
      this.state = COMPLETE_STATUS;
    }
  };
}

export default new UserStore();
