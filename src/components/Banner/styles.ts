import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  max-height: 850px;
  min-height: 500px;
  background-size: cover;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }

  .left-text {
    position: absolute;
    width: 50vw;
    padding: 10rem;
    color: #fff;

    h3 {
      font: 500 20px "Poppins", sans-serif;
      color: #ca0f0f;
      padding-bottom: 15px;
    }

    h1 {
      font-weight: 500;
      font-size: 50px;
      line-height: 55px;
    }

    p {
      font-weight: 300;
      font-size: 16px;
      line-height: 38px;
      padding-top: 25px;
    }

    .button {
      width: 200px;
      height: 45px;
      background-color: #ca0f0f;
      margin-top: 30px;

      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;

      text-decoration: none;
      font-weight: 300;
      font-size: 16px;
      color: #fff;
    }
  }
`;
