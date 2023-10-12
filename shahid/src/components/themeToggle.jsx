import React from 'react';
import {connect} from 'react-redux';
import {toggleTheme} from "../action/changeThemeAction";

const ThemeToggle = ({theme = localStorage.getItem('theme'), toggleTheme}) => {
	return (
		<button onClick={toggleTheme}>
			{theme === 'light' ? '🌞' : '🌜'}
		</button>
	);
};

const mapStateToProps = (state) => ({
	theme: state.theme.theme,
});

const mapDispatchToProps = {
	toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);