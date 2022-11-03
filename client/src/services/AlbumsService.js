import $api from './index';

class AlbumsService {
    static get = async () => {
        return await $api.get('/albums');
    };

    static post = async (name, year, href, image, desc) => {
        return await $api.post('/albums', { name, year, href, image, desc });
    };

    static update = async (id, name, year, href, image, desc) => {
        return await $api.put(`/albums/${id}`, {
            name,
            year,
            href,
            image,
            desc
        });
    };

    static delete = async (id) => {
        return await $api.delete(`/albums/${id}`);
    };
}

export default AlbumsService;