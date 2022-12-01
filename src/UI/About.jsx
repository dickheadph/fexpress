import React, { Fragment } from "react";
import puds from "../Components/images/puds.png";
import OrderNow from "../Components/OrderNow";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../Components/store/uiSlice";
function About() {
  const dispatch = useDispatch();
  const readMore = useSelector((state) => state.ui.readMore);

  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, fugit? Odio sed hic repudiandae, dicta vel nisi quaerat doloremque amet. Nostrum quidem voluptate incidunt aspernatur voluptas quo, tempore optio cumque? Dolores, quis dicta illo atquevel similique reiciendis quae, amet cumque, odit sapiente et tempora. Culpa repellendus, ab, itaque eum consequuntur delectus sint blanditiis ea sed tempora voluptate temporibus maiores. Assumenda esse fuga officiis a exercitationem, enim vero rerum consectetur perspiciatis, corrupti adipisci cumque eligendi itaque harum sunt numquam vel doloremque provident natus reprehenderit Odit fuga laborum illo saepe corrupti.";

  const viewHandler = () => {
    dispatch(uiActions.about());
  };
  return (
    <Fragment>
      <div className="w-full mx-auto lg:my-20">
        <div className="flex flex-wrap">
          <div className="w-6/12 lg:block hidden">
            <img src={puds} alt="@" className="w-full lg:h-80 object-fill" />
          </div>
          <div className="lg:w-5/12 w-full mx-10">
            <h1 className="text-red-500 text-lg font-semibold">About</h1>
            <h1 className="text-zinc-800 lg:text-3xl text-xl font-semibold py-2">
              Our Food is The Best Food
            </h1>

            <p className="md:text-base text-sm text-zinc-800 h-44 lg:h-auto py-3">
              {readMore ? text : text.substring(0, 335)}
              <em onClick={viewHandler}>
                {!readMore ? "...Read More" : " ...Read Less"}
              </em>
            </p>
            <div>
              <OrderNow btnName="Order Now" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
