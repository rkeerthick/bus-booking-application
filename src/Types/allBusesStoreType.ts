

export interface allBusesType {
  id: number;
  busName: string;
  from: string;
  to: string;
  startingTime: string;
  depatureTime: string;
  boardingPoints: BoardingPoint[];
  dropPoints: DropPoint[];
  availableSeats: number;
  seatLayout: SeatLayout[];
}

export interface BoardingPoint {
  stopping: string;
  timing: string;
}

export interface DropPoint {
  stopping: string;
  timing: string;
}

export interface SeatLayout {
  row: number;
  seats: Seats;
}

export interface Seats {
  l1: L1;
  r1: R1;
}

export interface L1 {
  seatNo: number;
    isBooked: boolean;
    price?: number
}

export interface R1 {
  seatNo: number;
    isBooked: boolean;
    price?: number
}
