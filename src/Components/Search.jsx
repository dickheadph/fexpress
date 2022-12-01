import React, { Fragment, useState } from "react";

function Search(props) {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    // console.log(input);
    if (input.length === null) {
      return;
    }
    props.onSearch(input);
    setInput("");
  };
  return (
    <Fragment>
      <div className="text-center max-w-[500px] mx-auto">
        <form className="text-black" onSubmit={searchHandler}>
          <label htmlFor="">
            <input
              type="text"
              placeholder="Search for... burger, chicken, steak"
              onChange={inputHandler}
              className="lg:w-full lg:py-3 py-1 px-4 rounded-md outline-none focus:border-[1px] border-orange-500"
            />
          </label>
        </form>
      </div>
    </Fragment>
  );
}

export default Search;
