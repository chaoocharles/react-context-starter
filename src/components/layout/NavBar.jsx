import { useContext } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 10px;
  color: white;
  background: crimson;
`;

const NavBar = () => {
  return (
    <StyledNav>
      <h3>My Notes</h3>
      <h3>0 Notes</h3>
    </StyledNav>
  );
};

export default NavBar;
