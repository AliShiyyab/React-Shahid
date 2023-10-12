import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from './components/nav';
import {Home} from './Pages/home';
import {Contact} from './Pages/contact';
import {About} from './Pages/about';
import store from "./store/store";
import {ThemeProvider} from "styled-components";

const theme = {
	light: {
		backgroundColor: '#fff',
		textColor: '#2D2D82',
	},
	dark: {
		backgroundColor: '#000',
		textColor: '#fff',
	},
};

function App() {
	const currentTheme = store.getState().theme.theme;
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme[currentTheme]}>
				<div>
					<Router>
						<Nav/>
						<Routes>
							<Route path="/" element={<Home/>}/>
							<Route path="/contact" element={<Contact/>}/>
							<Route path="/about" element={<About/>}/>
						</Routes></Router>
				</div>
			</ThemeProvider>
		</Provider>
	);
}

export default App;

