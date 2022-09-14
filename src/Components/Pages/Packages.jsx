import React from "react";
import Navbar from "../Navbar";
import Card from "../Card";
import Footer from "../Footer";
function Packages() {
  return (
    <div>
      <Navbar />
      <div className="text-center justify-center items-center my-10 mx-10">
        <h1 className="lg:text-4xl text-xl font-semibold text-zinc-800">
          Check Our Bundled Offer <br /> (Just for You.)
        </h1>
        <p className="text-center text-zinc-800 my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          Voluptates magnam beatae animi quia quis officiis. Sit amet
          consectetur adipisicing elit.
          <br />
          Voluptates magnam beatae animi quia quis officiis?
        </p>
      </div>
      <div className="mx-auto lg:mx-10">
        <h1 className="mx-4 text-zinc-800 text-3xl font-semibold py-2">
          Bundle <em className="text-red-500"> One</em>
        </h1>
        <div className="flex flex-wrap mx-2">
          <Card />
          <Card />
          <Card />
        </div>
        <h1 className="mx-4 text-zinc-800 text-3xl font-semibold pt-6">
          Bundle <em className="text-red-500"> Two</em>
        </h1>
        <div className="flex flex-wrap">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="text-center">
          <button className="animate-bounce bg-red-200 lg:py-3 lg:px-4 lg:text-lg py-2 px-3 lg:text-base font-semibold text-red-500 rounded-full mt-10 text-center">
            See More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Packages;
