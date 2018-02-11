import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
import './css/bootstrap-v4-minty/minty.css';
import configureStore from './js/redux/store';
import createRoutes from './js/components/router/routes';

const store = configureStore;
const appDiv = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    {createRoutes()}
  </Provider>,
  appDiv);
registerServiceWorker();
