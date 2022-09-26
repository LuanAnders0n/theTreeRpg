import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  .image {
    width: 100%;
    height: 100%;
    background-color: blue;
    position: absolute;
  }
`;

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 100%;
  z-index: 99;

  /* .mb-3 {
    display: flex;
    flex-direction: column;
  } */

  input {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 2px;
    border: none;
    display: flex;
  }
`;
