import React from "react";

function Button(props) {
  return (
    <>
      <button className="md:text-sm text-xs text-zinc-800 md:py-2 md:px-3 py-1 px-2 m-1 border-[1px] border-orange-500 rounded-full hover:bg-orange-400 hover:text-white">
        {props.children}
      </button>
    </>
  );
}

export default Button;
