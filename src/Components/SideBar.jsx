import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faHome,
  faBowlFood,
  faGift,
  faQuestion,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { uiActions } from "./store/uiSlice";
function SideBar() {
  const dispatch = useDispatch();

  const sideBarToggle = () => {
    dispatch(uiActions.toggleSideBar());
    document.body.style.overflow = "unset";
  };
  return (
    <>
      <motion.div
        className="absolute right-[0%] top-[0%] w-full h-full bg-red-50 z-20"
        onClick={sideBarToggle}
        animate={{
          x: 0,
        }}
        transition={{
          type: "spring",
          dumping: 40,
          stiffness: 40,
        }}
        initial={{
          x: 100,
        }}
      >
        <FontAwesomeIcon
          icon={faX}
          size="lg"
          className="absolute right-[6%] top-[4%]"
        />
        <div className="font-semibold">
          <ul className="absolute right-[10%] top-[10%]">
            <Link to={"/"}>
              <li className="p-3">
                <FontAwesomeIcon icon={faHome} /> HOME
              </li>
            </Link>
            <Link to={"/menu"}>
              <li className="p-3">
                <FontAwesomeIcon icon={faBowlFood} /> MENUS
              </li>
            </Link>
            <Link to={"/packages"}>
              <li className="p-3">
                <FontAwesomeIcon icon={faGift} /> PACKAGES
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="p-3">
                <FontAwesomeIcon icon={faQuestion} /> ABOUT
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="p-3">
                <FontAwesomeIcon icon={faPhone} /> CONTACT
              </li>
            </Link>
            <Link to={"/register"}>
              <div className="">
                <button className="mt-7 border-[1px] border-red-400 p-1 px-2 rounded-lg text-sm mx-2">
                  Log In
                </button>
                <button className="mt-7 border-[1px] border-red-400 p-1 px-2 rounded-lg text-sm">
                  Sign Up
                </button>
                <p className="text-xs text-center my-3">Have an account?</p>
              </div>
            </Link>
          </ul>
        </div>
      </motion.div>
    </>
  );
}

export default SideBar;
