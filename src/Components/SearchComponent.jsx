import React, { Fragment, useContext } from "react";
import Search from "./Search";
import Card from "./Card";
import MenuContext from "./Context/MenuContext";
import Spinner from "../Components/Spinner";
function SearchComponent() {
  
  const { searchData, query, loading, searchHandler } = useContext(MenuContext);

  const inputCheck = () => {
    if (searchData.length === 0 && query.length === 0) {
      return null;
    } else if (searchData.length <= 0) {
      return <p>No Search Found for ' {query} '</p>;
    } else {
      return <p>Search Results for {query}</p>;
    }
  };
  return (
    <Fragment>
      <div className="text-center">
        <Search onSearch={searchHandler} />
        {loading && <Spinner />}
        {!loading && inputCheck()}
      </div>
      <div>
        <ul className="flex flex-wrap mx-2">
          {searchData.map((cat) => (
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
      </div>
    </Fragment>
  );
}

export default SearchComponent;
