import "./App.css";
import Home from "./pages/Home/Home";
import New from "./pages/New/New";
import Detail from "./pages/Detail/Detail";
import Favorites from "./pages/Home/Favorites";
import All from "./pages/Home/All";
import Loading from "./pages/Detail/Loading";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import LoginCallback from "./pages/Login/LoginCallback";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<LoginCallback />} />
          <Route path="/new" element={<New />} />
          <Route path="/home" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
