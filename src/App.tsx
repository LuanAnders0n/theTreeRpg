import { Route, Routes, useLocation } from "react-router";
import { GlobalStyle } from "./styles/global";

//Pages
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import React from "react";

function App() {
  const location = useLocation();
  const paths = useMemo(
    () => !location.pathname.match(/login/g)?.length,
    [location]
  );
  return (
    <div>
      <GlobalStyle />
      {paths && (
        <div className="navbar">
          <Link to="/login">LoginPages</Link>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="characters" element={<Login />}>
          <Route path=":id" element={<Login />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
