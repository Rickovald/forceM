import { flow, makeAutoObservable } from 'mobx';
import ProgramService from '../services/ProgramService';
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from './constants';

class ProgramStore {
    program = [];
    state = LOADING_STATUS;

    constructor () {
        makeAutoObservable(this, {
            fetchProgram: flow
        });
        this.fetchProgram();
    }

    setProgram = (program) => {
        this.program = { ...program };
    };

    getProgram = () => {
        return this.program;
    };

    putSong = async (id, data, name) => {
        await ProgramService.put(id, data, name);
    };

    createSong = async (name, difficulty, comments, place, concert_name) => {
        await ProgramService.post(name, difficulty, comments, place, concert_name);
    };

    deleteSong = async (id) => {
        await ProgramService.delete(id);
    };

    * fetchProgram () {
        this.program = [];
        this.state = LOADING_STATUS;
        try {
            const program = yield ProgramService.get();

            this.state = COMPLETE_STATUS;
            this.setProgram(program.data);
        } catch (error) {
            this.state = ERROR_STATUS;
        }
    }

    updateProgram = async () => {
        this.program = [];
        this.state = LOADING_STATUS;
        try {
            const program = await ProgramService.get();
            this.state = COMPLETE_STATUS;
            this.setProgram(program.data);
        } catch (error) {
            this.state = ERROR_STATUS;
        }
    };
}

export default new ProgramStore();