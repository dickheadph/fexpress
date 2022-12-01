import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import rider from "../images/delivery.png";
import OrderNow from "../OrderNow";
import { motion } from "framer-motion";
import ChooseUs from "../../UI/ChooseUs";
import About from "../../UI/About";
import Testi from "../../UI/Testi";
import Download from "../../UI/Download";
import News from "../../UI/News";
import Rating from "../Rating";
function Home() {
<<<<<<< HEAD
  const newFeedback = (feedback) => {
    console.log(feedback);
  };
=======
  const btnProperty = [
    {
      btnName: "Order Now",
      btnOrder: "How to Order",
    },
    {
      btnName: "More",
      btnOrder: "Watch Video",
    },
  ];
>>>>>>> eb89713ca73bbc863a63fb788b501810d1f98e62
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <motion.div
        className="max-w-screen-xl mx-auto"
        animate={{
          y: 0,
        }}
        initial={{
          y: 100,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          dumping: 30,
        }}
      >
        <div className="flex lg:mt-20">
          <motion.div
            className="lg:w-6/12 w-full m-7"
            animate={{
              x: 0,
            }}
            initial={{
              x: -100,
            }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
            }}
          >
            <h1 className="inline-block font-semibold text-white bg-zinc-800 rounded px-2 my-1">
=======
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="lg:w-6/12 w-full m-7">
            <h1 className="inline-block font-semibold text-white bg-zinc-800 rounded">
>>>>>>> eb89713ca73bbc863a63fb788b501810d1f98e62
              Lorem Ipsum
            </h1>
            <h1 className="lg:text-7xl text-4xl font-semibold text-zinc-800">
              Choose your <span className="text-red-500"> Best Food </span> &
              with <span className="text-red-500"> Fastest Delivery </span>
            </h1>
        <div 
            <p className="text-zinc-600 lg:text-base text-sm my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates magnam beatae animi quia quis officiis?
            </p>
            </div>
            </div>
            </div>
            <OrderNow btnName={"Order Now"} btnOrder={"How to Order"} />
          </motion.div>
          <motion.div
            className="w-6/12 lg:block hidden"
            transition={{
              yoyo: Infinity,
              scale: 1.5,
              delay: 0.3,
            }}
          >
            <motion.img
              src={rider}
            <p className="text-zinc-600 lg:text-base my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates magnam beatae animi quia quis officiis? Illum quaerat
              corrupti earum reiciendis accusantium consequuntur!
            </p>
            <OrderNow
              btnName={btnProperty[0].btnName}
              btnOrder={btnProperty[0].btnOrder}
            />
          </div>
          <div className="w-6/12 lg:block hidden">
            <img src={rider} alt="@" className="h-[80%] w-screen" />
          </div>
        </div>
        <div className="max-w-screen-xl lg:mx-auto mx-10">
          <div className="text-center">
            <h1 className="lg:text-3xl text-xl font-semibold text-zinc-800">
              Why Choose Us
            </h1>
            <p className="text-zinc-800 my-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              Voluptates magnam beatae animi quia quis officiis. Sit amet
              consectetur elit.
              <br />
              Voluptates magnam beatae animi quia quis officiis?
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto my-5">
          <div className="flex flex-wrap lg:ml-28 mx-10">
            <div className="w-4/12">
              <img src={thumb} alt="@" width="240px"/>
              <h1 className="font-medium py-3 mt-3">Easy to Order</h1>
            </div>
            <div className="w-4/12">
              <img src={delivery} alt="@" />
              <h1 className="font-medium py-3">Fast Delivery</h1>
            </div>
            <div className="w-4/12">
              <img src={food} alt="@"  width="341px"/>
              <h1 className="font-medium py-3">Best Quality</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section end */}
        {/* <div className="flex my-20">
          <div className="w-5/12 lg:block hidden">
            <img src={puds} alt="@" className="w-full lg:h-80 object-fill" />
          </div>
          <div className="lg:w-7/12 w-full mx-10">
            <h1 className="text-red-500 text-lg font-semibold">About</h1>
            <h1 className="text-zinc-800 lg:text-3xl text-xl font-semibold py-2">
              Our Food is The Best Food
            </h1>
            <p className="text-zinc-800 h-44 lg:h-auto overflow-auto py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, fugit? Odio sed hic repudiandae, dicta vel nisi quaerat
              doloremque amet. Nostrum quidem voluptate incidunt aspernatur
              voluptas quo, tempore optio cumque? Dolores, quis dicta illo atque
              vel similique reiciendis quae, amet cumque, odit sapiente et
              tempora. Culpa repellendus, ab, itaque eum consequuntur delectus
              sint blanditiis ea sed tempora voluptate temporibus maiores.
              Assumenda esse fuga officiis a exercitationem, enim vero rerum
              consectetur perspiciatis, corrupti adipisci cumque eligendi itaque
              harum sunt numquam vel doloremque provident natus reprehenderit!
              Odit fuga laborum illo saepe corrupti.
            </p>
            <OrderNow
              btnName={btnProperty[1].btnName}
              btnOrder={btnProperty[1].btnOrder}
            />
          </div>
        </div> */}
        {/* Menu here */}
        <div className="lg:my-20 mt-10 mx-10">
          <h1 className="text-center lg:text-3xl text-xl font-semibold text-zinc-800">
            Explore Our Best Foods
          </h1>
          <p className="text-center text-zinc-800 my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            magnam beatae animi quia quis officiis. Sit amet consectetur
            adipisicing elit. Voluptates magnam beatae animi quia quis officiis?
          </p>
        </div>
        <div className="lg:mx-5">
          <h1 className="mx-4 text-zinc-800 lg:text-3xl text-xl font-semibold py-2">
            Category <em className="text-red-500"> One</em>
          </h1>
          <div className="flex flex-wrap mx-2">
            <Card />
            <Card />
            <Card />
          </div>
          <h1 className="mx-4 text-zinc-800 lg:text-3xl text-xl font-semibold py-2">
            Category <em className="text-red-500"> Two</em>
          </h1>
          <div className="flex flex-wrap mx-2">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="text-center">
            <button className="animate-bounce bg-red-200 lg:py-3 lg:px-4 lg:text-lg py-2 px-3 font-semibold text-red-500 rounded-full mt-10 text-center">
              See More
            </button>
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="max-w-screen-lg mx-auto lg:my-24 my-10">
        <div className="flex mx-10">
          <div className="w-5/12 bg-red-500 rounded-t-3xl lg:block hidden">
            <img src={Chef} alt="@" className="h-auto mt-20" width="900px" />
          </div>
          <div className="lg:w-7/12 w-full lg:ml-10">
            <h1 className="text-red-500 lg:text-lg font-semibold">
              Testimonials
            </h1>
            <h1 className="text-zinc-800 lg:text-3xl text-xl font-semibold py-2">
              What our Costumers Says
            </h1>
            <p className="text-zinc-800 h-44 lg:h-auto overflow-auto pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, fugit? Odio sed hic repudiandae, dicta vel nisi quaerat
              doloremque amet.
            </p>
            <div className="border-[1px] border-zinc-700 rounded-t-xl w-auto h-76 bg-red-50">
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
              <p className="p-5 text-base">
                Nostrum quidem voluptate incidunt aspernatur voluptas quo,
                tempore optio cumque? Dolores, quis dicta illo atque vel
                similique reiciendis quae, amet cumque, odit sapiente et
                tempora. Culpa repellendus, ab, itaque eum consequuntur delectus
                sint blanditiis ea sed tempora voluptate temporibus maiores.
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
      </div>
      {/* Download Our app Section */}
      <div className="max-w-screen-xl lg:mx-auto">
        <div className="flex flex-wrap bg-red-100 py-4 px-6 rounded-3xl mb-10 mx-10">
          <div className="lg:w-6/12 mt-10">
            <h1 className="text-zinc-800 lg:text-4xl text-xl font-semibold">
              Download Our App for FREE!
            </h1>
            <p className="text-zinc-800 overflow-hidden lg:h-auto pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, fugit? Odio sed hic repudiandae, dicta vel nisi quaerat
              doloremque amet.
            </p>
            <div className="mb-4">
              <button className="bg-red-500 lg:py-3 lg:px-4 lg:text-lg py-2 px-3 lg:text-base font-semibold text-white rounded-full mt-10 text-center">
                Get the App
              </button>
            </div>
            <h1 className="text-zinc-800 text-2xl font-semibold py-2">
              Download the App From
            </h1>
            <button className="bg-transparent border-[1px] border-red-500 py-2 px-3 rounded-lg text-red-500 font-semibold mr-3">
              Google Play
            </button>
            <button className="inline bg-transparent border-[1px] border-zinc-800 py-2 px-3 rounded-lg text-zinc-700 font-semibold mt-3">
              Apple Store
            </button>
          </div>
          <div className="lg:w-6/12 w-full lg:pl-20 pt-4">
            <img
              src={App}
              alt="@"
              className="h-[80%] w-full object-fit"
              animate={{
                y: 4,
              }}
              transition={{
                flip: Infinity,
                duration: 1,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
      {/* Hero Section end */}
      <ChooseUs />
      <About />
      {/* Testimonial Section */}
      <Testi />
      {/* Download Our app Section */}
      <Download />
      {/* Food news Section */}
<<<<<<< HEAD
      <News />
      {/* Rating section */}
      <Rating newFeedback={newFeedback} />
=======
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center justify-center items-center lg:my-20 my-10 mx-10">
          <h1 className="text-red-500 lg:text-lg font-semibold">News</h1>
          <h1 className="lg:text-4xl text-xl font-semibold text-zinc-800">
            Explore Our Food News
          </h1>
          <p className="text-center text-zinc-800 my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            magnam beatae animi quia quis officiis. <br />
            Sit amet consectetur adipisicing elit. Voluptates magnam beatae
            animi quia quis officiis?
          </p>
        </div>
        <div className="flex flex-wrap mx-2">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
>>>>>>> eb89713ca73bbc863a63fb788b501810d1f98e62
      {/* footer section */}
      <Footer />
    </>
  );
}

export default Home;
