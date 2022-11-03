import { flow, makeAutoObservable } from 'mobx';
import ConcertsService from '../services/ConcertsService';
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from './constants';

class ConcertsStore {
    concerts = [];
    state = LOADING_STATUS;

    constructor () {
        makeAutoObservable(this, {
            fetchConcerts: flow
        });
        this.fetchConcerts();
    }

    setConcerts = (concerts) => {
        this.concerts = { ...concerts };
    };

    getConcerts = () => {
        return this.concerts;
    };

    putConcert = async (
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
        await ConcertsService.update(
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
        );
    };

    createConcert = async (
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
        await ConcertsService.post(
            concert_name,
            date,
            place,
            group,
            tickets,
            tickets_price,
            city,
            country,
            main_album
        );
    };

    deleteConcert = async (id, concert_name, date, place, group, tickets, tickets_price, city, country, main_album) => {
        await ConcertsService.delete(
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
        );
    };

    * fetchConcerts () {
        this.concerts = [];
        this.state = LOADING_STATUS;
        try {
            const concerts = yield ConcertsService.get();
            this.state = COMPLETE_STATUS;
            this.setConcerts(concerts.data);
        } catch (error) {
            this.state = ERROR_STATUS;
        }
    }
}

export default new ConcertsStore();