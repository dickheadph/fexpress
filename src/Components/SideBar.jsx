import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
function SideBar() {
  const [sideBar, setSideBar] = useState(false);

  const sideBarToggle = () => {
    setSideBar(!sideBar);
  };
  return (
    <div className="">
      <div className="" onClick={sideBarToggle}>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className={`lg:hidden top-0 right-0 absolute mt-12 mr-12 ease-in-out duration-400 ${
            !sideBar ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <div
          className={
            !sideBar
              ? "hidden"
              : "bg-red-500 rounded-l-3xl top-0 right-0 h-screen w-[50%] absolute"
          }
        >
          <FontAwesomeIcon
            icon={faX}
            size="xl"
            className="top-0 right-0 absolute mt-12 mr-12"
          />
          <div className="text-center">
            <ul className="space-x-10 pt-3 text-white font-semibold text-lg mt-10">
              <Link to={"/"}>
                <li className="hover:wiggle py-2 hover:text-red-500 lg:text-red-500 text-white">
                  Home
                </li>
              </Link>

              <Link to={"/menu"}>
                <li className="py-2 hover:text-red-500">Menu</li>
              </Link>

              <Link to={"/packages"}>
                <li className="py-2 hover:text-red-500">Packages</li>
              </Link>

              <Link to={"/about"}>
                <li className="py-2 hover:text-red-500">About</li>
              </Link>

              <Link to={"/contact"}>
                <li className="py-2 hover:text-red-500">Contact</li>
              </Link>

              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fillRule="currentColor"
                  className="bi bi-search mx-3"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  {" "}
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    id="mainIconPathAttribute"
                  ></path>{" "}
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fillRule="currentColor"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  {" "}
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    id="mainIconPathAttribute"
                    fillRule="#000000"
                  ></path>{" "}
                </svg>
              </div>

              <button className="flex bg-red-300 rounded-xl py-2 px-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fillRule="currentColor"
                  className="bi bi-box-arrow-in-right mt-1 mx-2"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                    id="mainIconPathAttribute"
                    fill="#ffff"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    id="mainIconPathAttribute"
                    fill="#ffff"
                  ></path>
                </svg>
                Register
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
