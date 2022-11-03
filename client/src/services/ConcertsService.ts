import $api from './index'

class BannersService {
    static get = async () => {
        return await $api.get('/concerts')
    };

    static post = async (
        concert_name: string,
        date: string,
        place: string,
        group: string,
        tickets: string,
        tickets_price: string,
        city: string,
        country: string,
        main_album: string
    ) => {
        return await $api.post('/concerts', {
            concert_name,
            date,
            place,
            group,
            tickets,
            tickets_price,
            city,
            country,
            main_album
        })
    };

    static update = async (
        id: number,
        concert_name: string,
        date: string,
        place: string,
        group: string,
        tickets: string,
        tickets_price: string,
        city: string,
        country: string,
        main_album: string
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
            main_album
        })
    };

    static delete = async (id: number) => {
        return await $api.delete(`/concerts/${id}`)
    };
}

export default BannersService