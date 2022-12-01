import React from "react";
import { useNavigate } from "react-router-dom";
function EventCard(props) {
  const { img, name } = props;
  const navigateTo = useNavigate();

  const eventHandler = () => {
    const proceed = window.confirm(
      `Would you like to proceed with ${name} Package ?`
    );
    if (proceed) {
      navigateTo("/packform");
    } else {
      return;
    }
    const chosenEvent = {
      img,
      name,
    };
    // const { img, name } = chosenEvent;
    //props.setValue(chosenEvent);
    console.log(chosenEvent);
  };
  return (
    <>
      <div className="w-2/4 lg:w-auto" onClick={eventHandler}>
        <div className="relative my-3 mx-2 shadow-xl">
          <img
            className="rounded-lg"
            src={img}
            alt="eventType"
            width={"590px"}
          />
          <div className="absolute bg-[#0003] hover:bg-[#0008] inset-0 rounded-lg">
            <div className="absolute right-[23%] lg:right-[33%] top-[70%] text-center">
              <h1 className="text-xl lg:text-3xl font-bold text-white">
                {name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
