import { action, makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { allBusesType } from "../Types/allBusesStoreType";

class journeyStore {
    journey: {} = {}

  constructor() {
    makeObservable(this, {
      journey: observable,
    });

    makePersistable(this, {
      name: "Journey Details",
      properties: ["journey"],
      storage: window.localStorage,
    });
  }

  setJourneyDetails(data: any) {
    this.journey = data;
  }
}

const journeyDetails = new journeyStore();

export default journeyDetails;
