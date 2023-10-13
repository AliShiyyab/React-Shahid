import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeProvider from './components/ThemeProvider';
import Home from "./Pages/home";
import {About} from "./Pages/about";
import {Contact} from "./Pages/contact";
import styled from "styled-components";
import {ListOfUsers} from "./services/list-of-users";
import {Blog} from "./Pages/blog";

const CustomDiv = styled.div`
	background-color: ${(props) => props.theme.navbarBackground};
    color: ${(props) => props.theme.navbarText};
`;

function App() {


	return (
		<Router>
			<ThemeProvider>
				<CustomDiv>
					<Navbar/>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/about" element={<About/>}/>
						<Route path="/contact" element={<Contact/>}/>
						<Route path='/blogs' element={<Blog />} />
					</Routes>
				</CustomDiv>
			</ThemeProvider>
		</Router>
	);
}

export default App;
