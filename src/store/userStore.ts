import { makeObservable, observable } from "mobx"
import { makePersistable } from "mobx-persist-store"

export type userDetailsType = {
    id: string;
    name: string;
    email: string;
    busId: string;
    bookedSeats: string[];
}

class userStore{
    public userDetails: userDetailsType = {
        id: '',
        name: '',
        email: '',
        busId: '',
        bookedSeats: [],
    }

    constructor() {
        makeObservable(this, {
            userDetails: observable
        })

        makePersistable(this, {
            name: 'User Store',
            properties: ["userDetails"],
            storage: window.localStorage,
        })
    }
}

const UserStore = new userStore();
export default UserStore;