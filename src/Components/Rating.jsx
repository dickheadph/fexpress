import React, { Fragment, useState } from "react";
import RateButtons from "./RateButtons";

function Rating(props) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const ratingHandler = (rating) => {
    setRating(rating);
  };
  const rateHandler = (e) => {
    setReview(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userFeedback = {
      rating,
      review,
    };
    //console.log(userFeedback);
    props.newFeedback(userFeedback);
    setReview("");
    setRating("");
  };
  return (
    <Fragment>
      <div className="text-center">
        <h1>Rate Our Service</h1>
        <RateButtons setRating={ratingHandler} />
        <form onSubmit={submitHandler}>
          <label htmlFor="">
            <input
              type="text"
              onChange={rateHandler}
              value={review}
              className="py-1 px-3 outline-none border-[1px] border-orange-500 rounded-lg"
            />
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    </Fragment>
  );
}

export default Rating;
