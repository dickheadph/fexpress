import React from "react";
import food from "../Components/images/food.png";
function Card(props) {
  return (
    <div className="w-2/4 lg:w-4/12 my-4 hover:shadow-xl rounded-2xl">
      <div className="">
        <div className="w-auto mx-1 border-[1px] outline-none border-red-500 border-b-transparent rounded-t-xl">
          {/* {props.foodImage} */}
          <img src={food} className="w-full lg:h-56 h-44" alt="@" />
        </div>
        <div className="px-2 border-[1px] outline-none border-red-500 border-t-transparent rounded-b-xl mx-1 bg-gradient-to-b from-transparent to-red-50">
          <div className="lg:flex flex-wrap my-2 font-semibold text-sm">
            <h1 className="">
              Burger
              <span className="lg:ml-44 ml-14">$ 666.00</span>
            </h1>
          </div>
          <p className="text-left lg:text-base text-sm">
            Lorem ipsum et al nanit demos tado m ipsum et al nanit demos tado
            nanit demos.
          </p>
          {/* star svg here */}
          <div className="mt-3 text-center">
            <p className="lg:inline lg:text-left lg:mr-10 font-semibold">
              *****
            </p>
            <button className="bg-red-500 lg:py-3 lg:px-4 lg:text-lg py-2 px-3 font-semibold text-white rounded-full mt-2 ease-out transform hover:scale-125 transition duration-500 mb-2 inline">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
