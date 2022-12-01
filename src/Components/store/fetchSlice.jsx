import axios from "axios";
import { cartAction } from "./cartSlice";
export const fetchCartData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      await axios
        .get(`https://groovy-groove-268003.firebaseio.com/FEcart.json`)
        .then((res) => {
          console.log(res);
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const cartData = fetchData();
    dispatch(cartAction.replaceCart(cartData));
  };
};
