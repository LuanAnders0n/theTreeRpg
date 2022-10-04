import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;

  .singUp {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1;
    max-width: 690px;
    min-height: 100vh;
    background-color: #15151e;
  }

  .logo {
    margin: 1.875rem;
  }

  h2,
  h3,
  p {
    color: #7d8395;
    font-size: 22px;
  }

  h1 {
    color: #dfdfdf;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 96px;
  }

  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
  }

  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
  }

  a {
    color: #26a668;
    text-decoration: none;
  }

  .loginClick {
    color: #26a668;
  }

  #firstName,
  #lastName,
  #nickname,
  #email {
    background-color: #313644;
    border-radius: 10px;
    color: white;
  }

  label {
    color: #626b83;
  }

  .gradient {
    position: absolute;
    width: 50%;
    height: 100vh;
    z-index: 0;
    left: 690px;

    background: linear-gradient(90deg, #15151e 0%, rgba(40, 42, 55, 0) 100%);
  }

  .tasha {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .line {
    position: absolute;
    height: 55rem;
    border: 1px solid #313644;
    border-radius: 50px;
    background: #313644;
    left: 697px;
    top: 50px;
  }

  .social {
    width: 300px;
    height: 60px;
    color: white;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    border-radius: 15px;

    &.google {
      background: #d62d20;
      display: flex;
      align-items: center;
    }
    &.facebook {
      background: #527bcb;
      display: flex;
      align-items: center;
    }
  }
`;
