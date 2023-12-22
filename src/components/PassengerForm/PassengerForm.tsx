import React, { useState } from "react";
import "./PassengerForm.scss";
import Button from "../Button/Button";
import UserStore, {
  bookedUserType,
} from "../../store/userStore";

export type passengerFormProps = {
  seatNo: number;
  seatIndex: string;
};
const PassengerForm = ({ seatNo, seatIndex }: passengerFormProps) => {
  // const nameRef = useRef<HTMLInputElement>();
  // const ageRef = useRef<HTMLInputElement>();
  // const genderRef = useRef<HTMLSelectElement>();
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("Male");

  const handleName = (value: string) => {
    setName(value);
  };

  const handleAge = (value: string) => {
    setAge(value);
  };

  const handleGender = (value: string) => {
    setGender(value);
  };

  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleAdd = () => {
    setIsAdded((prev) => !prev);
    UserStore.userDetails.bookedSeats.push({
      name: name,
      age: age,
      gender: gender,
      seatNo: seatIndex,
    });
  };

  const handleUpdate = () => {
    setIsEdit(false);
    const updatedList: (bookedUserType | undefined)[] =
      UserStore.userDetails.bookedSeats.map((items: any) => {
        if (items.seatNo === seatIndex) {
          return { name, age, gender, seatNo: seatIndex };
        }
        return items;
      });
    UserStore.userDetails.bookedSeats = updatedList;
  };

  return (
    <>
      {(!isAdded || isEdit) ? (
        <div className="passenger-form">
          <div className="passenger-form__seat-no">Seat No : {seatNo}</div>
          <div className="passenger-form__container">
            <input
              className="passenger-form__container__name"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => handleName(e.target.value)}
            />
            <input
              className="passenger-form__container__age"
              type="text"
              placeholder="age"
              value={age}
              onChange={(e) => handleAge(e.target.value)}
            />
            <select
              className="passenger-form__container__gender"
              id="gender"
              value={gender}
              onChange={(e) => handleGender(e.target.value)}
            >
              <option defaultValue="Select gender" selected disabled hidden>
                Select
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {!isEdit && (
              <Button type="button" onClick={handleAdd}>
                Add +
              </Button>
            )}
            {isEdit && (
              <Button type="button" onClick={handleUpdate}>
                Update
              </Button>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="passenger-form">
            <div className="passenger-form__container">
              <span className="seat-no">Seat No : {seatNo}</span>
              <span className="name">Name : {name}</span>
              <span className="age">Age : {age}</span>
              <span className="gender">Gender : {gender}</span>
              <Button type="button" onClick={() => setIsEdit(true)}>
                Edit
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PassengerForm;
