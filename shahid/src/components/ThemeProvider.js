import React from 'react';
import {connect} from 'react-redux';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

const ThemeProvider = ({theme, children}) => {
	const themes = {
		light: {
			navbarBackground: '#fff',
			navbarText: '#2D2D82',
		},
		dark: {
			navbarBackground: '#555',
			navbarText: '#eeeedd',
		},
	};

	return (
		<StyledThemeProvider
			theme={localStorage.getItem('theme') ? localStorage.getItem('theme') === 'light' ? themes['light'] : themes['dark'] : themes[theme]}>
			{children}
		</StyledThemeProvider>
	);
};

const mapStateToProps = (state) => ({
	theme: state.theme.theme,
});

export default connect(mapStateToProps)(ThemeProvider);
