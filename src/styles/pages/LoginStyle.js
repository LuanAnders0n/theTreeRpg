import styled from "styled-components";
import img from "../../images/background_login.gif";

const primary = "#ED7D3A";
const whiteSmoke = "#f9f9f9";
const lightGrey = "#ececec";
const grey = "#c4c4c4";
const mediumGrey = "#a7a7a7";
const deepGrey = "#343434";
const black = "#000000";
const blue = "#1b77f3";
const red = "#cf3c3f";

export const Container = styled.div`
  display: flex;
  background: #fff;
  flex-direction: row;

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    min-height: 100vh;
    padding: clamp(35px, 8%, 70px);
  }

  .login_logo {
    width: 300px;
    margin-bottom: 50px;
  }

  .login_title {
    color: ${deepGrey};
    font-size: 1.5em;
    margin-bottom: 30px;
  }

  .login__label {
    display: block;
    margin-bottom: 20px;
    width: 100%;
  }

  .login__label span {
    position: absolute;
    font-size: 0.8em;
    font-weight: 700;
    text-transform: uppercase;
    color: ${mediumGrey};
    margin: 20px;
    cursor: text;
    transition: all 200ms ease;
  }

  .login__label .span-active {
    font-size: 0.7em;
    margin: 8px 10px;
  }

  .login_icons {
    display: flex;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
  }

  .login_icons img {
    width: 20px;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input {
    width: 100%;
    background-color: ${lightGrey};
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 5px;
    outline: none;
    font-size: 0.9em;
    padding: 25px 10px 10px;
    font-weight: 600;
    color: ${deepGrey};
  }

  .input:focus {
    background-color: ${whiteSmoke};
    border: 2px solid ${deepGrey};
  }

  .icons_button {
    width: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }

  .login_icons .icons_button:nth-child(1) {
    background-color: ${blue};
  }

  .login_icons .icons_button:nth-child(2) {
    background-color: ${lightGrey};
  }
  .login_icons .icons_button:nth-child(3) {
    background-color: ${black};
  }

  .login_label--checkbox {
    width: 100%;
    margin: 15px 0 50px;
    font-size: 0.9em;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  .input--checkbox {
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${lightGrey};
    margin-right: 8px;
    border-radius: 3px;
  }

  .input--checkbox:checked {
    background-color: ${mediumGrey};
  }

  .input--checkbox:checked::after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: 3px solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    margin: 2px 6px;
  }

  .login_button {
    width: 60px;
    height: 60px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    margin-bottom: 60px;
    transition: 500ms;
    border: 2px solid ${lightGrey};
  }

  .login_button svg {
    fill: ${lightGrey};
    transition: 500ms;
  }

  .login_button:hover {
    cursor: pointer;
    background-color: ${primary};
    border: 0px;
  }

  .login_button:hover svg {
    fill: white;
  }

  .login_link {
    font-size: 0.8em;
    text-decoration: none;
    color: ${mediumGrey};
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: 700;
  }

  .wallpaper {
    width: 100%;
    background-image: url(${img});
    background-size: cover;
  }
`;
