import React, { useMemo } from "react";
import { Route, Routes, useLocation } from "react-router";
import { GlobalStyle } from "./styles/global";

import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Characters from "./pages/Characters";
import Encounters from "./pages/Encounters";
import Campaigns from "./pages/Campaigns";
import BasicRules from "./pages/BasicRules";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";

function App() {
  const location = useLocation();
  const paths = useMemo(
    () => !location.pathname.match(/login/g)?.length,
    [location]
  );
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      {paths && <Navbar />}
      <div style={paths ? { paddingTop: 60 } : {}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="characters" element={<Characters />} />
          <Route path="encounters" element={<Encounters />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="basicRules" element={<BasicRules />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
