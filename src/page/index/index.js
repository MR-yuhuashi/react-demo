import React from 'react';
import ReactDom from 'react-dom';

import Main from '../Main/Main.jsx';

import store from '../store.js';

import { Provider } from 'react-redux';


ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);