import React from "react";
import Bot from "../images/err.png";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="w-screen">
      <div className="flex flex-wrap">
        <div className="w-6/12">
          <img src={Bot} alt="@" className="pt-20" width="900px" />
        </div>
        <div className="w-6/12 mt-[15%] text-zinc-800">
          <h1 className="font-bold text-6xl"> Oppppss!<br/>Something went wrong...</h1>
          <Link to={"/"}><button className="pt-10 text-xl font-semibold">Please try again.</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
