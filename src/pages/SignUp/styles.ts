import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;

  .image {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 20%;
    z-index: 2;

    input {
      display: flex;
      background-color: #ffffff;
      border-radius: 8px;
      padding: 2px;
      border: none;
      width:100%;
    }
  }
`;
