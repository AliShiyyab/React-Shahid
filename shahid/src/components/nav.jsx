import React from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import ThemeToggle from "./themeToggle";

const NavbarWrapper = styled.nav`
  background-color: white;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
`;

const NavbarItem = styled.li`
  margin: 0;
  padding: 10px;
  width: 100%;
  text-align: center;
  align-self: center;
  &.active-tab{
    width: 100%;
    background-color: #D3D3D3;
  }
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #2D2D82;
  font-weight: bold;
  width: 100%;
  align: center;
`;

const Navbar = () => {
	const location = useLocation();
	const isActive = (route) => location.pathname === route;

	return (
		<NavbarWrapper>
			<NavbarList>
				<NavbarItem className={isActive('/') ? 'active-tab' : ''}>
					<NavbarLink to="/">
						Home
					</NavbarLink>
				</NavbarItem>
				<NavbarItem  className={isActive('/contact') ? 'active-tab' : ''}>
					<NavbarLink to="/contact">
						Contact
					</NavbarLink>
				</NavbarItem>
				<NavbarItem className={isActive('/about') ? 'active-tab' : ''}>
					<NavbarLink to="/about" >
						About
					</NavbarLink>
				</NavbarItem>
				<NavbarItem>
					<ThemeToggle />
				</NavbarItem>
			</NavbarList>
		</NavbarWrapper>
	);
};

export default Navbar;
