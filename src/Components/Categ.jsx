import React from "react";
import { motion } from "framer-motion";
function Categ(props) {
  const { name, img } = props;
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="relative border-[1px] hover:border-red-300 rounded-lg shadow-md mx-2"
      >
        <img className="rounded-lg h-[160px] w-full" src={img} alt="#" />
        <div className="absolute inset-0 hover:bg-[#0008] bg-[#0004] rounded-lg overflow-hidden">
          <div className="absolute top-[40%] right-[32%]">
            <h1 className="px-3 text-white font-semibold text-2xl shadow-xl">
              {name}
            </h1>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Categ;
