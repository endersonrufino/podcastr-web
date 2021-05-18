import styled from "styled-components";

export const HeaderContainer = styled.div`
  //height: 60px;
  //background: ${props => props.theme.colors.primary};
  //color: #fff;
  //display: flex;
  //justify-content: space-between;
  //align-items: center;
  //padding: 0 30px;

  /////::after

  background: ${props => props.theme.colors.background};
  height: 6.5rem;

  display: flex;
  align-items: center;
  padding: 2rem 4rem;

  border-bottom: 1px solid ${props => props.theme.colors.text};

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0 2rem;
    border-left: 1px solid ${props => props.theme.colors.text};
  }

  span {
    margin-left: auto;
    text-transform: capitalize;
  }
`;