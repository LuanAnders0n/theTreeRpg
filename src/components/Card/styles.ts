import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 400px;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.card};
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);

  div {
    text-align: center;
    margin-top: 100px;
  }

  &:hover {
    animation: float 2s ease-in-out infinite;
    cursor: pointer;
  }
  @keyframes float {
    0%,
    100% {
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0 rgba(0, 0, 0, 0.4);
      transform: translatey(-20px);
    }
  }
  img {
    width: 50px;
    height: 50px;
  }
`;
