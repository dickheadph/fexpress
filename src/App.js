import React from "react";
import {
  Home,
  Menu,
  Packages,
  Cart,
  PackageForm,
  Register,
  Dashboard,
  Error,
} from "./Components/Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MenuProvider } from "./Components/Context/MenuContext";

function App() {
  return (
    <MenuProvider>
      <div className="App bg-gradient-to-b from-red-100 to-bg-red-50">
        <BrowserRouter>
          <Routes basename={process.env.PUBLIC_URL}>
            <Route exact path={"/"} element={<Home />}></Route>
            <Route path={"/menu"} element={<Menu />}></Route>
            <Route path={"/packages"} element={<Packages />}></Route>
            <Route path={"/cart"} element={<Cart />}></Route>
            <Route path={"/packform"} element={<PackageForm />}></Route>
            <Route path={"/register"} element={<Register />}></Route>
            <Route path={"/dashboard"} element={<Dashboard />}></Route>
            <Route path={"*"} element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </MenuProvider>
  );
}

export default App;
