import React from 'react';
import Main from './screens';
import store from './store';
import {Provider} from 'react-redux';

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
