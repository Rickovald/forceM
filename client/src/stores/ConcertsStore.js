import { flow, makeAutoObservable } from "mobx";
import ConcertsService from "../services/ConcertsService";
import { LOADING_STATUS, COMPLETE_STATUS, ERROR_STATUS } from "./constants";

class ConcertsStore {

  concerts = [];
  state = LOADING_STATUS;

  constructor() {
    makeAutoObservable(this, {
      fetchConcerts: flow,
    });
    this.fetchConcerts();
  }
  setConcerts = (concerts) => {
    this.concerts = { ...concerts };
  };
  getConcerts = () => {
    return this.concerts;
  };
  // Note the star, this a generator function!
  *fetchConcerts() {
    this.concerts = [];
    this.state = LOADING_STATUS;
    try {
      // Yield instead of await.
      const concerts = yield ConcertsService.get();
      this.state = COMPLETE_STATUS;
      this.setConcerts(concerts);
    } catch (error) {
      this.state = ERROR_STATUS;
    }
  }
}

export default new ConcertsStore();
