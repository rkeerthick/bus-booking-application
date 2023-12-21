import { makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";

export type busDetailProps = {
  id: string;
  busName: string;
  availableSeats: number;
  seatType: string;
  startTime: string;
  endTime: string;
};
class selectedBusStore {
  public busDetails: busDetailProps = {
    id: "",
    busName: "",
    availableSeats: 0,
    seatType: "",
    startTime: "",
    endTime: "",
  };

  constructor() {
    makeObservable(this, {
      busDetails: observable,
    });

    makePersistable(this, {
      name: "All Bus Store",
      properties: ["busDetails"],
      storage: window.localStorage,
    });
  }
}

const SelectedBusStore = new selectedBusStore();
export default SelectedBusStore;
