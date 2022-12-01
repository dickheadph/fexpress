import React from "react";
import Spiner from "../Components/images/spinner.png";
function Spinner() {
  return (
    <>
      <div className="bg-[#0002] inset-0 absolute z-50">
        <img
          src={Spiner}
          className="animate-spin absolute lg:top-[27%] lg:right-[46%] right-[30%] top-[40%] w-[150px]"
          alt="spinner"
          //width="150px"
        />
      </div>
    </>
  );
}

export default Spinner;
