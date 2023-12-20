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
  // handleClick: (
  //   selectedRow: number,
  //   selectedColumn: string,
  //   selectedSeatNo: number,
  //   seatPrice?: number | undefined
  // ) => void;
  handleSeatSelection: ( seat: number, price: number|undefined) => void;
  seat: number;
  seats?: seatsObjectProps;
  columnNo?: string;
  isBooked?: boolean;
  price?: number | undefined;
};

export type seatLayoutProps = {
  handleClick: (
    selectedRow: number,
    selectedColumn: string,
    selectedSeatNo: number,
    seatPrice?: number
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
  price?: number | undefined;
  seatNo?: number | undefined;
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

export type inputProps = {
  type: "text" | "email" | "number";
  placeholder: string;
};

export type outlinedButtonProps = {
  type: "button" | "submit" | undefined;
  isClicked: boolean;
  children: string;
  handleClick?: () => void;
};