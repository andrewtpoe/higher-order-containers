import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducers from 'redux/combinedReducers';
import Todos from 'compositions/Todos';

const store = createStore(combinedReducers);

function Root() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default Root;
