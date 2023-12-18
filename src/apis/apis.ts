import axios from "axios"

export const fetchBuses = () => {
    const res = axios.get("http://localhost:8080/buses");
    return res;
}

export const fetchSpecificBus = (from: string, to: string) => {
    const res = axios.get(`http://localhost:8080/buses?from=${from}&to=${to}`);
    return res;
}