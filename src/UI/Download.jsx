import React, { Fragment } from "react";
import App from "../Components/images/app.png";
import { motion } from "framer-motion";

function Download() {
  return (
    <Fragment>
      <div className="w-full text-center px-3">
        <div className="flex flex-wrap bg-red-100 py-4 px-6 rounded-3xl mb-10 lg:mx-44">
          <div className="lg:w-6/12 mt-10">
            <h1 className="text-zinc-800 lg:text-4xl text-xl font-semibold">
              Download Our App for FREE!
            </h1>
            <p className="md:text-base text-sm text-zinc-800 overflow-hidden lg:h-auto pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, fugit? Odio sed hic repudiandae, dicta vel nisi quaerat
              doloremque amet.
            </p>
            <div className="mb-4">
              <button className="bg-red-500 lg:py-3 lg:px-4 lg:text-lg py-2 px-3 lg:text-base font-semibold text-white rounded-full mt-10 text-center">
                Get the App
              </button>
            </div>
            <h1 className="text-zinc-800 text-2xl font-semibold py-2">
              Download the App From
            </h1>
            <motion.button
              className="bg-transparent border-[1px] border-red-500 py-2 px-3 rounded-lg text-red-500 font-semibold mr-3"
              whileTap={{
                scale: 0.8,
              }}
            >
              Google Play
            </motion.button>
            <motion.button
              className="inline bg-transparent border-[1px] border-zinc-800 py-2 px-3 rounded-lg text-zinc-700 font-semibold mt-3"
              whileTap={{
                scale: 0.8,
              }}
            >
              Apple Store
            </motion.button>
          </div>
          <div className="lg:w-6/12 w-full lg:pl-20 py-3">
            <motion.img
              src={App}
              alt="@"
              className="w-screen w-auto lg:h-82 h-full rounded-3xl"
              animate={{
                y: 4,
              }}
              transition={{
                duration: 1,
                flip: Infinity,
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Download;
