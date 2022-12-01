import React from "react";

function OrderNow(props) {
  return (
    <div>
      <button className="ease-out transform hover:scale-125 transition duration-500 px-3 py-2 my-6 inline bg-red-500 rounded-full mt-5 font-semibold text-white lg:text-lg">
        {props.btnName}
      </button>
      <button className="inline animate-bounce ml-5 bg-red-200 lg:p-3 p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="hover:animate-spin bi bi-play-fill"
          viewBox="0 0 16 16"
          id="IconChangeColor"
        >
          {" "}
          <path
            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
            id="mainIconPathAttribute"
            fill="#f92f2f"
          ></path>{" "}
        </svg>
      </button>
      <p className="lg:inline lg:mx-6 lg:text-xl text-md text-zinc-800 font-semibold">
        {props.btnOrder}
      </p>
    </div>
  );
}

export default OrderNow;
