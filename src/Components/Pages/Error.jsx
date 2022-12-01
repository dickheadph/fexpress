import React from "react";
import Bot from "../images/err.png";
import { NavLink } from "react-router-dom";
function Error() {
  return (
    <div className="w-screen">
      <div className="flex flex-wrap">
        <div className="lg:w-6/12">
          <img src={Bot} alt="@" className="pt-20" width="900px" />
        </div>
        <div className="lg:w-6/12 mt-[15%] text-zinc-800 lg:text-left  text-center">
          <h1 className="font-bold text-6xl">
            {" "}
            Oppppss!
            <br />
            Something went wrong...
          </h1>
          <NavLink to={"/"}>
            <button className="pt-10 text-xl font-semibold underline text-orange-500">
              Back to Home
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Error;
