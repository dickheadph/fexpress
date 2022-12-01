import React, { useContext, Fragment } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Card from "../Card";
import Footer from "../Footer";
import Category from "../Category";
import SearchComponent from "../SearchComponent";
import Spinner from "../Spinner";
import MenuContext from "../Context/MenuContext";
import { useEffect } from "react";
function Menu() {
  //Pullout values from MenuContext using useContext
  const { prods, loading, getMenu } = useContext(MenuContext);
  useEffect(() => {
    getMenu();
  }, [getMenu]);
  return (
    <Fragment>
      <Navbar />
      <motion.div
        className="text-center mb-10"
        initial={{
          x: "-300vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          dumping: 25,
        }}
      >
        <div className="text-center justify-center items-center my-2 mx-10">
          <h1 className="lg:text-4xl text-2xl font-semibold text-zinc-800">
            Explore Our Best Foods
          </h1>
          <p className="text-center text-zinc-800 my-3 lg:text-base text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Voluptates magnam beatae animi quia quis officiis. Sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </motion.div>
      <SearchComponent />
      <motion.div
        className="mx-auto lg:mx-10"
        initial={{
          y: 200,
        }}
        animate={{
          y: 0,
          opacity: [0, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 25,
          duration: 1.5,
        }}
      >
        <h1 className="mx-4 text-zinc-800 text-3xl font-semibold py-2">
          Best <em className="text-red-500"> Sellers</em>
        </h1>
        <div>
          {loading ? (
            <Spinner />
          ) : (
            <ul className="flex flex-wrap mx-2">
              {prods.map((prod) => (
                <Card
                  id={prod.id}
                  key={prod.id}
                  img={prod.img}
                  rate={prod.rate}
                  name={prod.name}
                  price={prod.price}
                  dsc={prod.dsc}
                  country={prod.country}
                />
              ))}
            </ul>
          )}
        </div>
        <Category />
      </motion.div>
      <Footer />
    </Fragment>
  );
}

export default Menu;
