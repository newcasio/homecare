import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './public/styles/main.scss';
import './polyfills';
import App from './App';
import whiteGreyTheme from './const/themes/whiteGreyTheme';

const theme = createMuiTheme(whiteGreyTheme);

ReactDOM.render(
  (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  ), document.getElementById('app'),
);
