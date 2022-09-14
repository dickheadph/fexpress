import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <div className="max-w-screen bg-black/80 mt-20 p-10">
        <div className="flex flex-wrap text-white font-medium">
          <div className="lg:w-4/12 w-2/4  lg:px-2">
            <h1 className="text-white text-2xl font-semibold mb-3">
              Fastest<span className="text-red-500"> Food</span>
            </h1>
            <p className="font-medium">
              Lorem ipsum dolor sit amet co10tetur adipisicing elit. Sed
              excepturi vitae ullam quia dolor sit amet co10tetur adipisicing
              elit. Sed excepturi vitae ullam quia.
            </p>
            <div className="flex mt-10">
              <FontAwesomeIcon
                icon={faCircle}
                size="xl"
                className="mx-2"
                color="red"
              />
              <FontAwesomeIcon
                icon={faCircle}
                size="xl"
                className="mx-2"
                color="red"
              />
              <FontAwesomeIcon
                icon={faCircle}
                size="xl"
                className="mx-2"
                color="red"
              />
              <FontAwesomeIcon
                icon={faCircle}
                size="xl"
                className="mx-2"
                color="red"
              />
            </div>
          </div>
          <div className="lg:w-3/12 w-2/4 lg:px-2">
            <h1 className="text-white text-xl font-semibold mb-3">
              Contact<span className="text-red-500"> Us</span>
            </h1>
            <ul className="m-2 text-base">
              <a href="@">
                <li className="my-2">
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                  &nbsp; +63 123456789
                </li>
              </a>
              <a href="@">
                <li className="my-2">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  &nbsp; jhondoe@gmail.com
                </li>
              </a>
              <a href="@">
                <li className="my-2">
                  <FontAwesomeIcon icon={faLocationDot} size="lg" />
                  &nbsp; 916 Kansas City Misouri, 15th Ave.
                </li>
              </a>
              <a href="@">
                <li className="my-2">
                  <FontAwesomeIcon icon={faClock} size="lg" />
                  &nbsp; 24 Hours / Regular
                </li>
              </a>
            </ul>
          </div>
          <div className="lg:w-1/12 w-2/4 lg:px-2">
            <h1 className="text-white text-xl font-semibold mb-3">
              Quick<span className="text-red-500"> Links</span>
            </h1>
            <ul className="m-2">
              <a href="@">
                <li>Home</li>
              </a>
              <a href="@">
                <li>Packages</li>
              </a>
              <a href="@">
                <li>Menu</li>
              </a>
              <a href="@">
                <li>About</li>
              </a>
              <a href="@">
                <li>Contact</li>
              </a>
              <a href="@">
                <li>FAQ's</li>
              </a>
            </ul>
          </div>
          <div className="lg:w-4/12 w-2/4 lg:pl-10">
            <h1 className="text-white text-xl font-semibold mb-3">
              News<span className="text-red-500"> Letter</span>
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            excepturi vitae ullam quia.
            <div className="pr-3 my-2">
              <input
                className="py-4 px-4 my-3 rounded-l-lg text-zinc-800 outline-none hover:bg-slate-100"
                placeholder="Email"
              ></input>
              <div className="inline bg-red-500 hover:bg-red-600 py-4 px-4 rounded-r-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-send inline"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  {" "}
                  <path
                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                    id="mainIconPathAttribute"
                    fill="#ffffff"
                  ></path>{" "}
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center py-2 text-white text-base font-medium">
          All Rights Reserved &copy; Shan Carl Belgica
        </p>
      </div>
    </div>
  );
}

export default Footer;
