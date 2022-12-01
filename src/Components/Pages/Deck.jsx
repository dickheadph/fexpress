import React from "react";
const Deck = (props) => {
  return (
    <div>
      Deck
      <div className="bg-red-300 h-auto w-auto rounded-3xl">
        <h1>User List</h1>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name}, {user.email}, {user.password}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Deck;
