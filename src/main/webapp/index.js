import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Provider} from 'react-redux'
import store from './model'
import moment from 'moment'
import deLocale from 'moment/locale/de'

moment.locale("de-de", deLocale)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
