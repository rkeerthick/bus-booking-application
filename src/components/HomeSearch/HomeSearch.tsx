import { useEffect, useState } from "react";
import "./HomeSearch.scss";
// import { IoIosSwap } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecificBus } from "../../apis/apis";
import { useNavigate } from "react-router-dom";
import journeyDetails from "../../store/journeyStore";

const HomeSearch = () => {
  useEffect(() => {
    localStorage.clear();
  })
  const [fromPlace, setFromPlace] = useState("KanniyaKumari");
  const [toPlace, setToPlace] = useState("Tirupur");
  const [bookingDate, setBookingDate] = useState(new Date());

  const navigate = useNavigate();

  const handleFromPlace = (value: string) => {
    setFromPlace(value);
  };

  const handleToPlace = (value: string) => {
    setToPlace(value);
  };

  const handleDate = (value: any) => {
    setBookingDate(value);
  };

  // const handleSwap = () => {
  //   setFromPlace((prevFrom) => {
  //     let x = '';
  //     setToPlace((prevTo) => {
  //       x = prevTo;
  //       console.log(prevFrom, prevTo);
  //       return prevFrom;
  //     });
  //     return x;
  //   });
  // };

  const { refetch } = useQuery({
    queryKey: ["specific bus"],
    queryFn: () => fetchSpecificBus(fromPlace, toPlace),
  });

  const HandleClick = () => {
    refetch();
    journeyDetails.setJourneyDetails({
      boardingPoint: fromPlace,
      endPoint: toPlace,
      travelDate: bookingDate,
    });
    navigate("/displayBuses");
  };

  return (
    <div className="home-search">
      <div className="home-search__container">
        {/* <div onClick={handleSwap} className="home-search__container__swap">
          <IoIosSwap />
        </div> */}
        <input
          onChange={(e: any) => handleFromPlace(e.target.value)}
          value={fromPlace}
          className="home-search__container__starting"
          type="text"
          placeholder="From"
        />
        <input
          onChange={(e: any) => handleToPlace(e.target.value)}
          value={toPlace}
          className=""
          type="text"
          placeholder="To"
        />
        <input type="date" onChange={(e: any) => handleDate(e.target.value)} />
        <button
          className="home-search__container__ending"
          type="button"
          onClick={HandleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HomeSearch;
