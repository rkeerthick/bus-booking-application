import { action, makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { allBusesType } from "../Types/allBusesStoreType";

export interface journeyDetailsType {
  boardingPoint: string;
  endPoint: string;
  travelDate: Date;
}

class journeyStore {
    journey: journeyDetailsType = {} as journeyDetailsType

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
      debugger
    this.journey = data;
  }
}

const journeyDetails = new journeyStore();

export default journeyDetails;
