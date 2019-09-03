import { combineReducers } from 'redux';
import { reducer as gameReducer } from './components/game';

export default combineReducers({
  gameReducer,
});
