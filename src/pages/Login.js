import React from "react";

import { Container } from "../styles/pages/LoginStyle";

const Login = () => {
  //Create a Function for placeholder move up in input in Input Label Component or Search for a library EX: ChakraUI, AvComponents, etc.
  return (
    <Container>
      <section class="login">
        <div class="wrapper">
          <img src="assets\the_tree_logo.png" class="login_logo" />

          <h1 class="login_title">Fazer login</h1>
          {/* Create a Component Input Label */}
          <label class="login__label">
            <span>nome de usuário</span>
            <input type="text" name="username" class="input" />
          </label>

          <label class="login__label">
            <span>senha</span>
            <input type="password" name="password" class="input" />
          </label>
          {/* Create a Component Input Label */}

          {/* Create component Button */}
          <div class="login_icons">
            <button type="button" class="icons_button">
              <img src="assets/facebook_icon.png" alt="facebook" />
            </button>

            <button type="button" class="icons_button">
              <img src="assets/google_icon.png" alt="google" />
            </button>

            <button type="button" class="icons_button">
              <img src="assets/apple_icon.png" alt="apple" />
            </button>
          </div>
          {/* Create component Button */}

          {/* In Input Label Component, create mutable type */}
          <label class="login_label--checkbox">
            <input type="checkbox" class="input--checkbox" />
            <span>Manter login</span>
          </label>
          {/* In Input Label Component, create mutable type */}
        </div>
        <div class="wrapper">
          <button type="button" class="login_button" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
            </svg>
          </button>

          <a href="#" class="login_link">
            não consegue iniciar a sessão?
          </a>
          <a href="#" class="login_link">
            criar conta
          </a>
        </div>
      </section>
      <section class="wallpaper" />
    </Container>
  );
};

export default Login;
