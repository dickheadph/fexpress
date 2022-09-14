import React from "react";
import food from "../Components/images/food.png";
function Card(props) {
  return (
    <div className="w-2/4 lg:w-4/12 my-4 hover:shadow-xl rounded-2xl">
      <div className="">
        <div className="w-auto mx-1 border-[1px] outline-none border-red-500 border-b-transparent rounded-t-xl">
          {/* {props.foodImage} */}
          <img src={food} className="w-full h-56" alt="@" />
        </div>
        <div className="p-4 border-[1px] outline-none border-red-500 border-t-transparent rounded-b-xl mx-1 bg-gradient-to-b from-transparent to-red-50">
          <div className="flex mb-2 lg:space-x-36 space-x-12 text-lg font-semibold">
            <h1 className="">Burger De Lata</h1>
            <h2 className="text-right">$ 666.00</h2>
          </div>
          <p className="text-left pt-2">
            Lorem ipsum et al nanit demos tado m ipsum et al nanit demos tado
            nanit demos.
          </p>
          {/* star svg here */}
          <div className="mt-3 text-center">
            <p className="lg:inline lg:text-left mr-10 font-semibold">
              ***** (1k+ Review)
            </p>
            <button className="bg-red-500 lg:py-3 lg:px-4 lg:text-lg py-2 px-3 lg:text-base font-semibold text-white rounded-full mt-4 ease-out transform hover:scale-125 transition duration-500 px-6 py-2 m-6 inline">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
