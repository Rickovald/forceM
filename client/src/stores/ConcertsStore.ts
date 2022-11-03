import { flow, makeAutoObservable } from 'mobx';
import ConcertsService from '../services/ConcertsService';
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from './constants';
import { IConcerts } from "../presets/interfaces"
class ConcertsStore {
    concerts:IConcerts[] = [];
    state = LOADING_STATUS;

    constructor () {
        makeAutoObservable(this, {
            fetchConcerts: flow
        });
        this.fetchConcerts();
    }

    setConcerts = (concerts: IConcerts) => {
        this.concerts = { ...concerts };
    };

    getConcerts = () => {
        return this.concerts;
    };

    putConcert = async (
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

    deleteConcert = async (id: number) => {
        await ConcertsService.delete(id);
    };

    fetchConcerts = async () => {
        this.concerts = [];
        this.state = LOADING_STATUS;
        try {
            const concerts = await ConcertsService.get();
            this.state = COMPLETE_STATUS;
            this.setConcerts(concerts.data);
        } catch (error) {
            this.state = ERROR_STATUS;
        }
    }
}

export default new ConcertsStore();