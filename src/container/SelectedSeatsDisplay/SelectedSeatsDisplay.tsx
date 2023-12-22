import "./SelectedSeatsDisplay.scss";
import SelectedSeat from "../../components/SelectedSeat/SelectedSeat";
import { selectedSeatProps, selectedSeatTypes } from "../../Types/types";
import Modal from "../../modal/Modal";
import MaximumCountModal from "../../components/MaximuxCountModal/MaximumCountModal";
import { useNavigate } from "react-router-dom";

const SelectedSeatsDisplay = ({
  selectedSeats,
  isOpen,
  closeModal,
}: selectedSeatProps) => {
  let totalPrice: number = 0;
  const navigate = useNavigate();

  const calculateTotal = (price: number | undefined) => {
    price && (totalPrice += price);
  };

  const handleClick = () => {
    navigate("/addPassenger");
  };

  return (
    <>
      <Modal toggleModal={closeModal} isOpen={isOpen}>
        <MaximumCountModal closeModal={closeModal} />
      </Modal>
      <div className="selected-seat-display">
        <div className="selected-seat-display__container">
          <div className="selected-seat-display__container__seat-section">
            {selectedSeats.length === 0 ? (
              <SelectedSeat helperText="Please book your seat" />
            ) : (
              selectedSeats.map((data: selectedSeatTypes) => {
                calculateTotal(data.price);
                return <SelectedSeat price={data.price} seatNo={data.seatNo} />;
              })
            )}
          </div>
          {selectedSeats.length !== 0 && (
            <div
              className="selected-seat-display__container__total-cost"
              onClick={handleClick}
            >
              Total Price : ₹{totalPrice}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectedSeatsDisplay;
