import React, { useContext} from "react";
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
    <>
      <Navbar />
<<<<<<< HEAD
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
=======
      <div className="text-center my-20">
        <div className="text-center justify-center items-center  my-4">
          <h1 className="text-4xl font-semibold text-zinc-800">
            Explore Our Best Foods
          </h1>
          <p className="text-center text-zinc-800 my-3 text-base">
>>>>>>> eb89713ca73bbc863a63fb788b501810d1f98e62
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Voluptates magnam beatae animi quia quis officiis. Sit amet
            consectetur adipisicing elit.
<<<<<<< HEAD
=======
            <br />
            Voluptates magnam beatae animi quia quis officiis?
>>>>>>> eb89713ca73bbc863a63fb788b501810d1f98e62
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
<<<<<<< HEAD
        <Category />
      </motion.div>
=======
        <h1 className="mx-4 text-zinc-800 text-3xl font-semibold pt-6">
          Category <em className="text-red-500"> Two</em>
        </h1>
        <div className="flex flex-wrap">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="text-center">
          <button className="animate-bounce bg-red-200 lg:py-3 lg:px-4 lg:text-lg py-2 px-3 lg:text-base font-semibold text-red-500 rounded-full mt-10 text-center">
            See More
          </button>
        </div>
      </div>
        <Footer />
    </div>
    </>
>>>>>>> eb89713ca73bbc863a63fb788b501810d1f98e62
  );
}

export default Menu;
