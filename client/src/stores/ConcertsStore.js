import { flow, makeAutoObservable } from "mobx";
import ConcertsService from "../services/ConcertsService";

class ConcertsStore {
  concertsService = new ConcertsService();

  concerts = [];
  state = "pending";

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
    this.state = "pending";
    try {
      // Yield instead of await.
      const concerts = yield this.concertsService.get();
      this.state = "done";
      this.setConcerts(concerts);
    } catch (error) {
      this.state = "error";
    }
  }
}

export default new ConcertsStore();
