import { action, makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { allBusesType } from "../Types/allBusesStoreType";

class allBusesStore {
    allBuses: allBusesType[] = [];

  constructor() {
    makeObservable(this, {
      allBuses: observable,
    });

    makePersistable(this, {
      name: "All Bus Store",
      properties: ["allBuses"],
      storage: window.localStorage,
    });
  }

    setAllBuses(data: any) {
      this.allBuses = data;
  }
}

const allBus = new allBusesStore();

export default allBus;