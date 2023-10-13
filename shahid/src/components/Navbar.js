import React from 'react';
import ThemeToggle from './ThemeToggle';
import {NavbarContainer, NavLinks, StyledNavLink} from "./styles";



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
