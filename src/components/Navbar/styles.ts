import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  padding: 0 20px;

  .navbuttons {
    display: flex;

    div {
      padding: 0 50px;
    }
  }

  .link {
    padding: 0 5px;
    margin: 0 5px;
    font-weight: 300;
    font-size: 14px;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    transition: 400ms;
    border-bottom: 1px solid transparent;

    :hover {
      color: ${props => props.theme.colors.secondary};
      border-bottom: 1px solid ${props => props.theme.colors.secondary};
    }

    &.sign {
      padding: 2px 20px;
      color: ${props => props.theme.colors.text};
      background-color: ${props => props.theme.colors.secondary};
      border: 2px solid ${props => props.theme.colors.secondary};
      border-radius: 10px;

      :hover {
        background-color: transparent;
      }
    }
  }
`
