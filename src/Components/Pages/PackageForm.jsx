import React, { Fragment } from "react";
import EventCard from "../EventCard";
function PackageForm() {
  const valueHandler = (value) => {
    console.log(value);
  };
  return (
    <Fragment>
      <EventCard setValue={valueHandler} />
      {/* <div>img={[]} name={[]}
        <div>
          <img src="" alt="" />
          <div>
            <h1></h1>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
}

export default PackageForm;
