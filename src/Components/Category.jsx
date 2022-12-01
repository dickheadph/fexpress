import React, { Fragment, useEffect, useState, useCallback } from "react";
import Card from "./Card";
import Categ from "./Categ";
import axios from "axios";
import requestFor from "./Api/api";
import FilterCategory from "./FilterCategory";
function Category() {
  const [filter, setFilter] = useState("/bbqs");
  const [category, setCategory] = useState([]);
  const [list, setList] = useState(18);

  const filterHandler = (filter) => {
    setFilter(filter);
  };
  const getCategory = useCallback(() => {
    axios
      .get(`${requestFor.foodCat}${filter}?_start=0&_limit=${list}`)
      .then((res) => {
        //console.log(res.data);
        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [list, filter]);

  const listHandler = () => {
    setList(list + 12);
    //console.log(list);
  };

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  return (
    <Fragment>
      <h1 className="text-center m-4 text-zinc-800 text-3xl font-semibold pt-6">
        Menu <em className="text-red-500"> Categories</em>
      </h1>
      <div className="lg:block hidden">
        <div className="flex mx-20">
          <p
            className="w-full"
            onClick={() => {
              setFilter("/bbqs");
            }}
          >
            <Categ
              name="BBQ's"
              img={`https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66741/kings-pig-out-party-pack.06e697890e8ff7674df25ec980412cac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1`}
            />
          </p>
          <p
            className="w-full"
            onClick={() => {
              setFilter("/burgers");
            }}
          >
            <Categ
              name="BURGERS"
              img={
                "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129511/burger-fries-kit-for-4.ffc10e462cadece50d64f8ce5fd8ea7a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
              }
            />
          </p>
          <p
            className="w-full"
            onClick={() => {
              setFilter("/desserts");
            }}
          >
            <Categ
              name="DESSERTS"
              img={
                "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
              }
            />
          </p>
          <p
            className="w-full"
            onClick={() => {
              setFilter("/drinks");
            }}
          >
            <Categ
              name="DRINKS"
              img={
                "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132626/unicorn-parade-milkshake-kit-for-2.9052d04c1cf25b29442048bd3e535f21.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
              }
            />
          </p>
          <p
            className="w-full"
            onClick={() => {
              setFilter("/pizzas");
            }}
          >
            <Categ
              name="PIZZAS"
              img={
                "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89948/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
              }
            />
          </p>
          <p
            className="w-full"
            onClick={() => {
              setFilter("/steaks");
            }}
          >
            <Categ
              name="STEAKS"
              img={
                "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113759/holiday-sampler-9-pack.2de75ca80282ffe9d064eb757ff7a5a1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
              }
            />
          </p>
        </div>
      </div>
      <FilterCategory onFilter={filterHandler} />
      <div className="mt-10">
        <ul className="flex flex-wrap mx-2">
          {category.map((cat) => (
            <Card
              id={cat.id}
              key={cat.id}
              img={cat.img}
              rate={cat.rate}
              name={cat.name}
              price={cat.price}
              dsc={cat.dsc}
              country={cat.country}
            />
          ))}
        </ul>
        <div className="text-center">
          <button
            onClick={listHandler}
            className="animate-bounce bg-red-200 lg:py-3 lg:px-4 lg:text-lg py-2 px-3 lg:text-base font-semibold text-red-500 rounded-full mt-10 text-center"
          >
            See More
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Category;
