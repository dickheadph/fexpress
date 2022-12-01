import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import rider from "../images/delivery.png";
import OrderNow from "../OrderNow";
import { motion } from "framer-motion";
import ChooseUs from "../../UI/ChooseUs";
import About from "../../UI/About";
import Testi from "../../UI/Testi";
import Download from "../../UI/Download";
import News from "../../UI/News";
import Rating from "../Rating";
function Home() {
  const newFeedback = (feedback) => {
    console.log(feedback);
  };
  return (
    <>
      <Navbar />
      <motion.div
        className="max-w-screen-xl mx-auto"
        animate={{
          y: 0,
        }}
        initial={{
          y: 100,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          dumping: 30,
        }}
      >
        <div className="flex lg:mt-20">
          <motion.div
            className="lg:w-6/12 w-full m-7"
            animate={{
              x: 0,
            }}
            initial={{
              x: -100,
            }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
            }}
          >
            <h1 className="inline-block font-semibold text-white bg-zinc-800 rounded px-2 my-1">
              Lorem Ipsum
            </h1>
            <h1 className="lg:text-7xl text-4xl font-semibold text-zinc-800">
              Choose your <span className="text-red-500"> Best Food </span> &
              with <span className="text-red-500"> Fastest Delivery </span>
            </h1>
            <p className="text-zinc-600 lg:text-base text-sm my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates magnam beatae animi quia quis officiis?
            </p>
            <OrderNow btnName={"Order Now"} btnOrder={"How to Order"} />
          </motion.div>
          <motion.div
            className="w-6/12 lg:block hidden"
            transition={{
              yoyo: Infinity,
              scale: 1.5,
              delay: 0.3,
            }}
          >
            <motion.img
              src={rider}
              alt="@"
              className="h-[80%] w-full object-fit"
              animate={{
                y: 4,
              }}
              transition={{
                flip: Infinity,
                duration: 1,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
      {/* Hero Section end */}
      <ChooseUs />
      <About />
      {/* Testimonial Section */}
      <Testi />
      {/* Download Our app Section */}
      <Download />
      {/* Food news Section */}
      <News />
      {/* Rating section */}
      <Rating newFeedback={newFeedback} />
      {/* footer section */}
      <Footer />
    </>
  );
}

export default Home;
