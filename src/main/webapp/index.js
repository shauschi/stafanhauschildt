'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './App.jsx';
import moment from 'moment'
import deLocale from 'moment/locale/de'

moment.locale("de-de", deLocale);

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('app')
);
