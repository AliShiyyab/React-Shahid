import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.navbarBackground};
  color: ${(props) => props.theme.navbarText};
  display: flex;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.navbarText};
  justify-content: space-between;
  padding: 10px 20px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  font-weight: bold;
  align: center;
  align-self: center;
  font-size: 18px;
  padding: 8px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.navbarText};
  font-weight: 400;
  &:hover {
    font-weight: 500;
    text-decoration: underline;  
  }
  &.active {
    font-weight: 700;
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinks>
        <StyledNavLink to="/" exact activeClassName={"active"}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/about" activeClassName={"active"}>
          About
        </StyledNavLink>
        <StyledNavLink to="/blogs" activeClassName={"active"}>
          Blogs
        </StyledNavLink>
        <StyledNavLink to="/contact" activeClassName={"active"}>
          Contact
        </StyledNavLink>
      </NavLinks>
      <ThemeToggle />
    </NavbarContainer>
  );
};

export default Navbar;
