import React, { Fragment } from "react";

function News() {
  return (
    <Fragment>
      <div className="w-full mx-auto">
        <div className="text-center justify-center items-center lg:my-20 my-10 mx-10">
          <h1 className="text-red-500 lg:text-lg font-semibold">News</h1>
          <h1 className="lg:text-4xl text-xl font-semibold text-zinc-800">
            Explore Our Food News
          </h1>
          <p className="text-center text-zinc-800 my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            magnam beatae animi quia quis officiis. <br />
            Sit amet consectetur adipisicing elit. Voluptates magnam beatae
            animi quia quis officiis?
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default News;
