import React, { Fragment, useState } from "react";
import "../index.css";
function RateButtons(props) {
  const [selected, setSelected] = useState(0);
  const buttonHandler = (e) => {
    setSelected(+e.target.value);
    props.setRating(+e.target.value);
  };
  return (
    <Fragment>
      <div className="w-full mx-auto">
        <form>
          <ul className="flex text-center">
            <li className={`radio`}>
              <input
                type="radio"
                value="1"
                color="red"
                className=""
                onChange={buttonHandler}
                checked={selected === 1}
              />
              <label htmlFor="" className="relative">
                1
              </label>
            </li>
            <li className={`radio`}>
              <input
                type="radio"
                value="2"
                className=""
                onChange={buttonHandler}
                checked={selected === 2}
              />
              <label htmlFor="" className="relative">
                2
              </label>
            </li>
            <li className={`radio`}>
              <input
                type="radio"
                value="3"
                className=""
                onChange={buttonHandler}
                checked={selected === 3}
              />
              <label htmlFor="" className="relative">
                3
              </label>
            </li>
            <li className={`radio`}>
              <input
                type="radio"
                value="4"
                className=""
                onChange={buttonHandler}
                checked={selected === 4}
              />
              <label htmlFor="" className="relative">
                4
              </label>
            </li>
            <li className={`radio`}>
              <input
                type="radio"
                value="5"
                className=""
                onChange={buttonHandler}
                checked={selected === 5}
              />
              <label htmlFor="" className="relative">
                5
              </label>
            </li>
          </ul>
        </form>
      </div>
    </Fragment>
  );
}

export default RateButtons;
