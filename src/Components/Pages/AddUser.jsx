import React, { useState } from "react";
import Deck from "./Deck";
import Register from "./Register";

function AddUser() {
  const [usersList, setUsersList] = useState([]);
  const userSignUp = (uName, uEmail, uPassword) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          email: uEmail,
          password: uPassword,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <Register addUser={userSignUp} />
      <Deck users={[usersList]} />
    </div>
  );
}

export default AddUser;
