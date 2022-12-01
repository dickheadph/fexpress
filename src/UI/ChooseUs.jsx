import React, { Fragment } from "react";
import thumb from "../Components/images/thumb.png";
import delivery from "../Components/images/rider.png";
import food from "../Components/images/food.png";
import { motion } from "framer-motion";

function ChooseUs() {
  return (
    <Fragment>
      <div className="w-full lg:mx-10">
        <div className="text-center">
          <h1 className="text-center lg:text-3xl text-xl font-semibold text-zinc-800">
            Why Choose Us
          </h1>
          <p className="lg:block hidden text-zinc-800 md:text-base text-sm my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Voluptates magnam beatae animi quia quis officiis. Sit amet
            consectetur elit.
            <br />
            Voluptates magnam beatae animi quia quis officiis?
          </p>
        </div>
      </div>
      <div className="w-full mx-auto my-5">
        <div className="flex flex-wrap lg:ml-28 mx-10 text-center">
          <motion.div
            className="w-4/12"
            initial={{
              y: 3,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              flip: Infinity,
              stiffness: 60,
              dumping: 30,
              duration: 1,
            }}
          >
            <img src={thumb} alt="@" width="240px" className="w-[50%]" />
            <h1 className="md:text-base text-xs font-medium py-3 mt-3">
              Easy to Order
            </h1>
          </motion.div>
          <motion.div
            className="w-4/12"
            initial={{
              y: 3,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              flip: Infinity,
              stiffness: 40,
              dumping: 50,
              duration: 1,
            }}
          >
            <img src={delivery} alt="@" className="w-[65%]" />
            <h1 className="md:text-base text-xs font-medium py-3">
              Fast Delivery
            </h1>
          </motion.div>
          <motion.div
            className="w-4/12"
            initial={{
              y: 3,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              flip: Infinity,
              stiffness: 50,
              dumping: 40,
              duration: 1,
            }}
          >
            <img src={food} alt="@" width="341px" className="w-[87%]" />
            <h1 className="md:text-base text-xs font-medium py-3">
              Best Quality
            </h1>
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
}

export default ChooseUs;
