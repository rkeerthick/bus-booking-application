import React, { LegacyRef, MutableRefObject, useRef, useState } from "react";
import "./PassengerForm.scss";
import Button from "../Button/Button";

const PassengerForm = ({ seatNo = 20 }: any) => {
  const nameRef = useRef<HTMLInputElement>();
  const ageRef = useRef<HTMLInputElement>();
  const genderRef = useRef<HTMLSelectElement>();

  const [isAdded, setIsAdded] = useState<boolean>(false);
  return (
    <>
      {!isAdded ? (
        <div className="passenger-form">
          <div className="passenger-form__seat-no">Seat No : {seatNo}</div>
          <div className="passenger-form__container">
            <input
              className="passenger-form__container__name"
              type="text"
              placeholder="name"
              ref={nameRef as LegacyRef<HTMLInputElement> | undefined}
            />
            <input
              className="passenger-form__container__age"
              type="text"
              placeholder="age"
              ref={ageRef as LegacyRef<HTMLInputElement> | undefined}
            />
            <select
              className="passenger-form__container__gender"
              id="gender"
              ref={genderRef as LegacyRef<HTMLSelectElement> | undefined}
            >
              <option defaultValue="Select gender" selected disabled hidden>
                Select
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <Button
              type="button"
              onClick={() => {
                setIsAdded((prev) => !prev);
                console.log(
                  nameRef?.current?.value,
                  ageRef?.current?.value,
                  genderRef?.current?.value
                );
              }}
            >
              Add +
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="passenger-form">
            <div className="passenger-form__container">
              <span className="seat-no">Seat No : {seatNo}</span>
              <span className="name">Name : {nameRef?.current?.value}</span>
              <span className="age">Age : {ageRef?.current?.value}</span>
              <span className="gender">
                Gender : {genderRef?.current?.value}
              </span>
              <Button type="button" onClick={() => setIsAdded((prev) => !prev)}>
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
