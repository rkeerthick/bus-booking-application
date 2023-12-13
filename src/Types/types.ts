export type seatsObjectProps = {
  seatNo: number;
  isBooked: boolean;
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
    selectedSeatNo: number
  ) => void;
  row: number;
  seats: seatsObjectProps;
  columnNo: string;
};

export type seatLayoutProps = {
  handleClick: (
    selectedRow: number,
    selectedColumn: string,
    selectedSeatNo: number
  ) => void;
  row: number;
  seats: any;
};


export type modalProps = {
  children: JSX.Element;
  isOpen?: boolean;
  toggleModal: () => void
};

export type buttonProps = {
  type: "button" | "submit" | undefined;
  children: string;
  onClick?: () => void;
};

export type loginProps = {
  closeLoginModal: () => void
};