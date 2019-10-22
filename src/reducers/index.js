import { combineReducers } from 'redux';
import todos from './todos';

const appReducers = {
  todos
};

const reducer = combineReducers(appReducers);

export default reducer;