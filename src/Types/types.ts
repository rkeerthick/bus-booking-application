
export type seatsObjectProps = {
  seatNo: number;
  isBooked: boolean;
  price?: number;
};

export type seatsProps = {
  [key: string]: seatsObjectProps;
};

export type columnProps = {
  row: number;
  seats: seatsProps;
};

export type seatProps = {
  handleClick: (
    selectedRow: number,
    selectedColumn: string,
    selectedSeatNo: number,
    seatPrice?: number | undefined
  ) => void;
  row: number;
  seats: seatsObjectProps;
  columnNo: string;
};

export type seatLayoutProps = {
  handleClick: (
    selectedRow: number,
    selectedColumn: string,
    selectedSeatNo: number,
    seatPrice?: number | undefined
  ) => void;
  row: number;
  seats: any;
};

export type modalProps = {
  children: JSX.Element;
  isOpen?: boolean;
  toggleModal: () => void;
};

export type buttonProps = {
  type: "button" | "submit" | undefined;
  children: string;
  onClick?: () => void;
};

export type loginProps = {
  closeLoginModal: () => void;
};

export type signUpProps = {
  closeSignupModal: () => void;
};

export type selectedSeatProps = {
  selectedSeats: selectedSeatTypes[];
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export type selectedSeatTypes = {
  seatPrice?: number | undefined;
  selectedSeatNo?: number | undefined;
  helperText?: string;
};

export type busLayoutProp = {
  rows: columnProps[];
  handleClick: (
    selectedRow: number,
    selectedColumn: string,
    selectedSeatNo: number,
    seatPrice: number | undefined
  ) => void;
};


export type selectedSeatTypeProps = {
  selectedSeatNo: number;
  seatPrice: number;
};