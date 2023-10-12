const initialTheme = localStorage.getItem('theme') === "light" ? "light" : 'dark';

const theme = (state = {theme: initialTheme}, action) => {
	switch (action.type) {
		case 'TOGGLE_THEME':
			const newTheme = state.theme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return {
				...state,
				theme: newTheme,
			};
		default:
			return state;
	}
};

export default theme;
