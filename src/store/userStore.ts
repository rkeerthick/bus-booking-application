import { makeObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";

export type bookedUserType = {
  name: string | undefined;
  age: string | undefined;
  gender: string | undefined;
  seatNo: string;
};

export type bookedSeatType = {
  seatNo: number;
  seatIndex: string;
};

export type userDetailsType = {
  id: string;
  name: string;
  email: string;
  busId: string;
  bookedSeats: (bookedUserType | undefined)[];
  bookedSeatsIndex: bookedSeatType[];
  // bookedSeatNos: number[];
};

class userStore {
  public userDetails: userDetailsType = {
    id: "",
    name: "",
    email: "",
    busId: "",
    bookedSeatsIndex: [],
    // bookedSeatNos: [],
    bookedSeats: [],
  };

  constructor() {
    makeObservable(this, {
      userDetails: observable,
    });

    makePersistable(this, {
      name: "User Store",
      properties: ["userDetails"],
      storage: window.localStorage,
    });
  }
}

const UserStore = new userStore();
export default UserStore;
