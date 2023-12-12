import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Userlisting from "./components/Userlisting";
import Adduser from "./components/Adduser";
import Updateuser from "./components/Updateuser";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Link to={"/"}>Home</Link>
        <Link to={"/user"}>User</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Userlisting />} />
        <Route path="/user/add" element={<Adduser />} />
        <Route path="/user/edit/:code" element={<Updateuser />} />
      </Routes>
    </div>
  );
}

export default App;
