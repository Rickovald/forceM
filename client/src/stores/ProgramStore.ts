import { flow, makeAutoObservable } from 'mobx';
import ProgramService from '../services/ProgramService';
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from './constants';
import { ISongPrograms } from "../presets/interfaces"

class ProgramStore {
    program:ISongPrograms[] = [];
    state = LOADING_STATUS;

    constructor () {
        makeAutoObservable(this, {
            fetchProgram: flow
        });
        this.fetchProgram();
    }

    setProgram = (program: ISongPrograms[]) => {
        this.program = { ...program };
    };

    getProgram = () => {
        return this.program;
    };

    putSong = async (id: number, data: string, name: string) => {
        await ProgramService.put(id, data, name);
    };

    createSong = async (name: string, difficulty: string, comments: string, place: string, concert_name: string) => {
        await ProgramService.post(name, difficulty, comments, place, concert_name);
    };

    deleteSong = async (id: number) => {
        await ProgramService.delete(id);
    };

    fetchProgram = async () => {
        this.program = [];
        this.state = LOADING_STATUS;
        try {
            const program = await ProgramService.get();

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