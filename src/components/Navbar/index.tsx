import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <div>
        <Link to="/">Home</Link>
        <Link to="characters">Minhas Fichas</Link>
        <Link to="encounters">Encontros</Link>
        <Link to="campaigns">Campanhas</Link>
        <Link to="basicRules">Regras Básicas</Link>
      </div>
      <div>
        <Link to="login">Login</Link>
        <Link to="signUp">Sign Up</Link>
      </div>
    </Container>
  );
};

export default Navbar;
