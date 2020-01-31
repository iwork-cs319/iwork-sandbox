import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';

import 'react-app-polyfill/ie11';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <AppRouter />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
