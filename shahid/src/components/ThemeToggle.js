import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {toggleTheme} from '../redux/actions/themeActions';

const ThemeToggle = ({theme, toggleTheme}) => {
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			toggleTheme(savedTheme);
		}
	}, [toggleTheme]);

	const handleThemeToggle = () => {
		toggleTheme();
		// Update localStorage with the new theme
		localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
	};

	return (
		<button onClick={handleThemeToggle}>
			{localStorage.getItem('theme') ? localStorage.getItem('theme') === 'light' ? '🌚' : '🌞' : theme === 'light' ? '🌚' : '🌞'}
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
