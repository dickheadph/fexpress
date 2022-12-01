import React from "react";
import { motion } from "framer-motion";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";
//import axios from "axios";
import { useDispatch } from "react-redux";
import { cartAction } from "./store/cartSlice";

function CartItem(props) {
  const { id, img, rate, quantity, name, price, total, dsc } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    //alert(`${name} was added succesfully`);
    dispatch(
      cartAction.addCart({
        id,
        rate,
        img,
        name,
        quantity,
        price,
        dsc,
      })
    );
  };
  return (
    <motion.div
      className="w-2/4 lg:w-2/12 rounded-2xl my-2"
      whileHover={{
        scale: 0.99,
      }}
    >
      <div className="mx-1 border-[1px] outline-none border-red-500 rounded-xl">
        {/* {props.foodImage} */}
        <div className="bg-red-500 absolute w-full z-10" />
        <LazyLoadImage
          src={img}
          className="relative object-cover rounded-t-xl"
          alt={id}
        />
        <div className="p-3 outline-none rounded-b-xl bg-gradient-to-b from-transparent to-red-100">
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-semibold">
              {rate}
              <FontAwesomeIcon
                icon={faStar}
                size="1x"
                className="text-orange-600"
              />
            </h1>
          </div>
          <div className="flex my-2 font-semibold justify-between items-center">
            <h1 className="lg:text-sm text-xs">{name}</h1>
            <div>
              <span className="lg:text-lg text-sm">${total}</span>
              <p className="text-sm">${price} /item</p>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                dispatch(cartAction.removeCart(id));
              }}
            >
              -
            </button>
            <p className="text-xs mx-3"> {quantity} </p>
            <button onClick={addToCartHandler}>+</button>
          </div>
          <p className="lg:text-xs text-xs overflow-">{dsc}</p>
          {/* .substring(0, 40) */}
        </div>
      </div>
      {/* star svg here */}
    </motion.div>
  );
}

export default CartItem;
