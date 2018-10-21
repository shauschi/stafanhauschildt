'use strict';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const PRIMARY = '#303030';
export const SECONDARY = 'rgb(30, 144, 255)';//'#ffb300';
export const PRIMARY_FONT = '#FFFFFF';

export const TITLE_BG = PRIMARY;

export const APP_THEME = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY,
      contrastText: PRIMARY_FONT
    },
    secondary: {
      main: SECONDARY
    },
    error: {
      main: '#FF0000'
    },
  }
});
