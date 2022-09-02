import { Route, Routes } from "react-router";
import { GlobalStyle } from "./styles/global";
//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
