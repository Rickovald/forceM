import axios from 'axios';
import $api, { API_URL } from './index';

class BannersService {
    static get = async () => {
        return await $api.get('/banners');
    };

    static post = async (img: string, head: string, button: string, href: string, href_type: string) => {
        return await $api.post('/banners', { img, head, button, href, href_type });
    };

    static update = async (id: number, img: string, head: string, button: string, href: string, href_type: string) => {
        return await $api.put(`/banners/${id}`, {
            img,
            head,
            button,
            href,
            href_type
        });
    };

    static delete = async (id: number) => {
        return await $api.delete(`/banners/${id}`);
    };

    static upload = async (img: string) => {
        return await axios.post(
            `${API_URL}/upload`,
            { img },
            {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            }
        );
    };
}

export default BannersService;