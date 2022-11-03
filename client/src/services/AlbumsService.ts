import $api from './index';

class AlbumsService {
    static get = async () => {
        return await $api.get('/albums');
    };

    static post = async (name: string, year: string, href: string, image: string, desc: string) => {
        return await $api.post('/albums', { name, year, href, image, desc });
    };

    static update = async (id: number, name: string, year: string, href: string, image: string, desc: string) => {
        return await $api.put(`/albums/${id}`, {
            name,
            year,
            href,
            image,
            desc
        });
    };

    static delete = async (id: number) => {
        return await $api.delete(`/albums/${id}`);
    };
}

export default AlbumsService;