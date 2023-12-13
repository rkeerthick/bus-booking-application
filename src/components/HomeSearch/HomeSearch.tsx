import { useState } from "react";
import "./HomeSearch.scss";
import { IoIosSwap } from "react-icons/io";

const HomeSearch = () => {
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");

  const handleFromPlace = (value: string) => {
    setFromPlace(value);
  };

  const handleToPlace = (value: string) => {
    setToPlace(value);
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

  return (
    <div className="home-search">
      <div className="home-search__container">
        {/* <div onClick={handleSwap} className="home-search__container__swap">
          <IoIosSwap />
        </div> */}
        <input
          onChange={(e: any) => handleFromPlace(e.target.valu)}
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
        <input type="date" />
        <button className="home-search__container__ending" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default HomeSearch;
