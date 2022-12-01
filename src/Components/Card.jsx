import React from 'react';
import { motion } from 'framer-motion';
import {
  faCartShopping,
  faHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import axios from "axios";
import { useDispatch } from 'react-redux';
import { cartAction } from './store/cartSlice';

function Card(props) {
  const { id, img, rate, name, price, dsc, country } = props;
  const dispatch = useDispatch();
  const addToCartHandler = async () => {
    alert(`${name} was added succesfully`);

    dispatch(
      cartAction.addCart({
        id,
        rate,
        img,
        name,
        price,
        dsc,
        country,
      })
    );

    // await axios.post(
    //   `https://groovy-groove-268003.firebaseio.com/FEcart.json`,
    //   {
    //     name,
    //     price,
    //     dsc,
    //     country,
    //   }
    // );
  };
  return (
    <>
      <motion.div
        className='w-2/4 lg:w-2/12 rounded-2xl my-2'
        initial={{ opacity: 0, y: -1 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 0.99,
        }}>
        <div className='mx-1 border-[1px] hover:border-[2px] outline-none border-orange-500 rounded-xl'>
          {/* {props.foodImage} */}

          <div className='relative w-full z-10'>
            <LazyLoadImage
              src={img}
              className='object-cover rounded-t-xl'
              alt={name}
            />
            <div className='absolute bg-[#0002] inset-0 rounded-t-xl'>
              <div className='absolute top-[84%] right-[8%]'>
                <FontAwesomeIcon
                  icon={faHeart}
                  size='1x'
                  className='text-red-500 mr-2'
                  onClick={() => {
                    alert('Marked as Favourite.');
                  }}
                />
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size='1x'
                  className='text-yellow-400'
                  onClick={addToCartHandler}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='p-3 outline-none rounded-b-xl bg-gradient-to-b from-transparent to-red-100'>
          <div className='flex justify-between items-center'>
            <h1 className='text-sm font-semibold'>
              {rate}
              <FontAwesomeIcon
                icon={faStar}
                size='1x'
                className='text-orange-600'
              />
            </h1>
          </div>
          <div className='flex my-2 font-semibold justify-between items-center'>
            <h1 className='lg:text-sm text-xs'>{name}</h1>
            <p className='lg:text-lg text-sm'>${price}</p>
          </div>
          <p className='lg:text-xs text-xs overflow-'>{dsc}</p>
        </div>
        {/* .substring(0, 40)
          // <p className='text-center text-xs font-semibold mt-2'>{country}</p>
          // <img src={food} className='w-full lg:h-56 h-44' alt='@' />
          //{' '}
        </div>
           */}
        <div className='px-2 border-[1px] outline-none border-red-500 border-t-transparent rounded-b-xl mx-1 bg-gradient-to-b from-transparent to-red-50'>
          <div className='lg:flex flex-wrap my-2 font-semibold text-sm'>
            <h1 className=''>
              Burger
              <span className='lg:ml-44 ml-14'>$ 666.00</span>
            </h1>
          </div>
          <p className='text-left lg:text-base text-sm'>
            Lorem ipsum et al nanit demos tado m ipsum et al nanit demos tado
            nanit demos.
          </p>
          {/* star svg here */}
          <div className='mt-3 text-center'>
            <p className='lg:inline lg:text-left lg:mr-10 font-semibold'>
              *****
            </p>
            <button className='bg-red-500 lg:py-3 lg:px-4 lg:text-lg py-2 px-3 font-semibold text-white rounded-full mt-2 ease-out transform hover:scale-125 transition duration-500 mb-2 inline'>
              Add to Cart
            </button>
          </div>
        </div>
        {/* star svg here */}
      </motion.div>
    </>
  );
}

export default Card;
