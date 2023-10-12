import { combineReducers } from 'redux';
import theme from "./theme";

const rootReducer = combineReducers({
  theme: theme,
});

export default rootReducer;