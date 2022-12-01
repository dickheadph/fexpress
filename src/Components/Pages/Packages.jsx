import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EventCard from "../EventCard";
import imageOf from "../images/Images";
function Packages() {
  return (
    <div>
      <Navbar />
      <motion.div
        className="text-center mb- mx-10"
        initial={{
          x: "500vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          dumping: 90,
        }}
      >
        <h1 className="lg:text-4xl text-xl font-semibold text-zinc-800">
          Check Our Bundled Offer <br />{" "}
          <em className="text-xl">(Just for You.)</em>
        </h1>
        <p className="text-center text-zinc-800 my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          Voluptates magnam beatae animi quia quis officiis. Sit amet
          consectetur adipisicing elit.
        </p>
      </motion.div>
      <motion.div className="mx-auto lg:mx-10 text-center mb-20">
        <h1 className="mx-4 text-zinc-800 lg:text-3xl text-xl font-semibold pt-6">
          Bundle Pack<em className="text-red-500"> &&</em> Catering Services
        </h1>
        <div className="w-full mx-auto">
          <ul className="flex flex-wrap">
            <EventCard img={`${imageOf.christening}`} name="Christening" />
            <EventCard img={`${imageOf.birthday}`} name="Birthday" />
            <EventCard img={`${imageOf.wedding}`} name="Wedding" />
            <EventCard img={`${imageOf.mourning}`} name="Mourning" />
            <EventCard img={`${imageOf.anniversary}`} name="Anniversary" />
            <EventCard img={`${imageOf.customPack}`} name="Custom-Pack" />
          </ul>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Packages;
