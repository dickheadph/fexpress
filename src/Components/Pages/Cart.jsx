import React, { Fragment } from "react";
import CartItem from "../CartItem";
import { useSelector } from "react-redux";
//import { fetchCartData } from "../store/fetchSlice";
// import axios from "axios";
function Cart() {
  //const [cart, setCart] = useState([]);

  const cartItems = useSelector((state) => state.cart.items);
  //const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCartData());
  // }, [dispatch]);

  // useEffect(() => {
  //   axios
  //     .get(`https://groovy-groove-268003.firebaseio.com/FEcart.json`)
  //     .then((res) => {
  //       console.log(res.data);
  //       //setCart(res.data.items);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <Fragment>
      <h1>Cart Items: </h1>
      <ul className="flex flex-wrap mx-2">
        {cartItems.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            img={item.img}
            rate={item.rate}
            name={item.name}
            price={item.price}
            total={item.totPrice}
            quantity={item.quantity}
          />
        ))}
      </ul>
      <p className="ml-2">Sub Total is: ??</p>
    </Fragment>
  );
}

export default Cart;
