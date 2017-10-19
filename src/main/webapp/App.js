import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import MyComponent from "./MyComponent";

const theme = createMuiTheme({
  palette: {
    primary: lightBlue, // Purple and green play nicely together.
    secondary: green,
    error: red,
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <MyComponent/>
  </MuiThemeProvider>
);


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);