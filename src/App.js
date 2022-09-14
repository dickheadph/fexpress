import {
  Home,
  Menu,
  Packages,
  About,
  Contact,
  Error,
} from "./Components/Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App bg-gradient-to-b from-red-100 to-bg-red-50">
      <BrowserRouter>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route exact path={"/"} element={<Home />}></Route>
          <Route path={"/menu"} element={<Menu />}></Route>
          <Route path={"/packages"} element={<Packages />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
          <Route path={"*"} element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
