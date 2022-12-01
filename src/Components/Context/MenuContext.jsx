import { createContext, useState, useCallback, useReducer } from "react";
import menuReducer from "./MenuReducer";
import requestFor from "../Api/api";
import axios from "axios";
const MenuContext = createContext();

export const MenuProvider = (props) => {
  //All food states
  const [prods, setProds] = useState([]);
  //Search states
  const [searchData, setSearchData] = useState([]);
  const [loading, isLoading] = useState(false);
  const [query, setQuery] = useState("");

  const initialState = {
    prods: [],
  };

  const [state, dispatch] = useReducer(menuReducer, initialState);

  //All food/Best Sellers
  const getMenu = useCallback(() => {
    isLoading(true);
    axios
      .get(`${requestFor.allFood}?_start=0&_limit=6`)
      .then((res) => {
        setProds(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    isLoading(false);

    dispatch({
      type: "GET_MENUS",
      payload: prods,
    });
  }, [prods]);

  //Search request
  const searchHandler = (searchInput) => {
    isLoading(true);
    setQuery(searchInput);
    axios
      .get(`${requestFor.foodSearch}${searchInput}`)
      .then((res) => {
        setSearchData(res.data);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   searchHandler();
  // }, []);

  return (
    <MenuContext.Provider
      value={{
        //All food
        prods: state.prods,
        isLoading: state.isLoading,
        getMenu,
        //Search
        searchData,
        query,
        loading,
        searchHandler,
      }}
    >
      {" "}
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
