import { makeAutoObservable } from 'mobx';
import UserService from '../services/UserService';
import axios from 'axios';
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from './constants';
import { IUser } from '../presets/interfaces';
class UserStore {
    isAuth = false;
    state = LOADING_STATUS;
    user: IUser[] = [];

    constructor () {
        makeAutoObservable(this);
    }

    setAuth = (isAuth: boolean) => {
        this.isAuth = isAuth;
    };

    getAuth = () => {
        return this.isAuth;
    };

    setUser = (user: IUser[]) => {
        this.user = user;
    };

    login = async (email: string, password: string) => {
        this.state = LOADING_STATUS;
        try {
            const response = await UserService.login(email, password);
            if (response.data.user) {
                this.setAuth(true);
                this.setUser(response.data.user);
                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('user', response.data.user.name);
            } else {
                return response.data;
            }
            this.state = COMPLETE_STATUS;
        } catch (e) {
            this.state = ERROR_STATUS;
        }
    };

    registration = async (email: string, password: string) => {
        this.state = LOADING_STATUS;
        try {
            const response = await UserService.registration(email, password);

            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('user', response.data.user.name);

            this.setAuth(true);
            this.setUser(response.data.user);
            this.state = COMPLETE_STATUS;
        } catch (error: any) {
            this.state = ERROR_STATUS;
            console.log(error.response?.data?.message);
        }
    };

    logout = async () => {
        this.state = LOADING_STATUS;
        try {
            await UserService.logout();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.setAuth(false);
            this.setUser([]);
            this.state = COMPLETE_STATUS;
        } catch (error: any) {
            this.state = ERROR_STATUS;
            console.log(error.response?.data?.message);
        }
    };

    checkAuth = async () => {
        this.state = LOADING_STATUS;
        try {
            const response = await axios.get('http://localhost:5000/api/user/refresh', {
                withCredentials: true
            });
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error: any) {
            this.state = ERROR_STATUS;
            console.log(error.response?.data?.message);
        } finally {
            this.state = COMPLETE_STATUS;
        }
    };
}

export default new UserStore();