import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <div>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="characters">
          Meus Personagens
        </Link>
        <Link className="link" to="encounters">
          Encontros
        </Link>
        <Link className="link" to="campaigns">
          Campanhas
        </Link>
        <Link className="link" to="basicRules">
          Regras Básicas
        </Link>
      </div>
      <div>
        <Link className="link sign" to="login">
          Login
        </Link>
        <Link className="link sign" to="signUp">
          Sign Up
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
