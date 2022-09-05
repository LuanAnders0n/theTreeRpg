import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 840px;
  background-image: url(${(props) => props.theme.img});
  background-size: cover;

  .left-text {
    width: 45vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
      width: 210px;
      height: 50px;
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
