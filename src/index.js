import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'react-app-polyfill/ie11';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
