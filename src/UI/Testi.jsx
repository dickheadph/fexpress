import React, { Fragment } from "react";
import Chef from "../Components/images/chef.png";
function Testi() {
  return (
    <Fragment>
      <div className="w-full flex my-20">
        <div className="w-4/12 bg-red-500 ml-44 rounded-t-3xl lg:block hidden">
          <img
            src={Chef}
            alt="@"
            className="absolute left-[15%] pt-20"
            width="350"
          />
        </div>
        <div className="lg:w-5/12 w-full lg:pl-10 mx-5">
          <h1 className="text-red-500 lg:text-lg font-semibold">
            Testimonials
          </h1>
          <h1 className="text-zinc-800 lg:text-3xl text-xl font-semibold py-2">
            What our Costumers Says
          </h1>
          <p className="md:text-base text-sm text-zinc-800 h-12 lg:h-auto mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
            fugit? Odio sed hic repudiandae, dicta vel nisi quaerat doloremque
            amet.
          </p>
          <div className="border-[1px] border-zinc-700 rounded-t-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-quote mt-5 ml-5"
              viewBox="0 0 16 16"
              id="IconChangeColor"
              transform="scale(1,1)"
            >
              {" "}
              <path
                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"
                id="mainIconPathAttribute"
                fill="#f79292"
                strokeWidth="0.1"
                color="#b18686"
              ></path>{" "}
            </svg>
            <p className="p-5 md:text-base text-sm">
              Nostrum quidem voluptate incidunt aspernatur voluptas quo, tempore
              optio cumque? Dolores, quis dicta illo atque vel similique
              reiciendis quae, amet cumque, odit sapiente et tempora. Culpa
              repellendus, ab, itaque eum consequuntur delectus sint blanditiis
              ea sed tempora voluptate temporibus maiores.
            </p>
            <div className="ml-5 mb-3">
              <h1 className="text-yellow-400 text-3xl font-semibold mt-3">
                *****
              </h1>
              <h1 className="text-xl font-semibold text-zinc-400">
                Shan Belgica
              </h1>
              <p className="text-xs font-semibold text-red-500">
                Food Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Testi;
