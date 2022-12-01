import React, { Fragment, useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import "../index.css";
function FilterCategory(props) {
  const [filter, setFilter] = useState("/bbqs");
  const [sort, setSort] = useState(false);
  const filterHandler = (e) => {
    setFilter(e.target.value);
    props.onFilter(e.target.value);
  };

  return (
    <Fragment>
      <div>
        <div className="text-right mx-3">
          <div>
            <FontAwesomeIcon
              icon={faFilter}
              size="1x"
              className="animate-bounce m-2 text-orange-500"
              onClick={() => {
                setSort(!sort);
              }}
            />
          </div>
          <div className="lg:hidden">
            <Button>BBQ</Button>
            <Button>Burger</Button>
            <Button>Desserts</Button>
            <Button>Drinks</Button>
            <button className="button"
                onClick={filterHandler}
                value="/pizzas">Pizza</button>
            <Button>Steak</Button>
          </div>
          {sort && (
            <div>
              <button
                className="button"
                onClick={filterHandler}
                value="/ice-cream"
              >
                Ice-cream
              </button>
              <button
                className="button"
                onClick={filterHandler}
                value="/breads"
              >
                Bread
              </button>

              <button
                className="button"
                onClick={filterHandler}
                value="/chocolates"
              >
                Chocolate
              </button>
              <button className="button" onClick={filterHandler} value="/porks">
                Pork
              </button>
              <button
                className="button"
                onClick={filterHandler}
                value="/fried-chicken"
              >
                Chicken
              </button>
              <button
                className="button"
                onClick={filterHandler}
                value="/sandwiches"
              >
                Sandwiches
              </button>
              <button
                className="button"
                onClick={filterHandler}
                value="/sausages"
              >
                Sausages
              </button>
              <button
                className="md:text-sm text-xs text-zinc-800 md:py-2 md:px-3 py-1 px-2 m-1 border-[1px] border-orange-500 rounded-full bg-orange-400 text-white"
                onClick={filterHandler}
                value="/our-foods"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default FilterCategory;
