import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-height: 850px;
  min-height: 500px;
  background-size: cover;
  display: flex;
  align-items: center;

  .shadow {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #15151e 10%, rgba(21, 21, 30, 0) 100%);
  }

  img {
    width: 100%;
  }

  .left-text {
    position: absolute;
    width: 50vw;
    padding: 10rem;
    color: #fff;
    z-index: 99;

    h3 {
      font: 500 20px 'Poppins', sans-serif;
      color: ${(props) => props.theme.colors.secondary};
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
      background-color: ${(props) => props.theme.colors.secondary};
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
