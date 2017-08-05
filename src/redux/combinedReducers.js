import { combineReducers } from 'redux';

import todos from './todos/reducer';
import filter from './filter/reducer';

const combinedReducers = combineReducers({
  todos,
  filter,
});

export default combinedReducers;
