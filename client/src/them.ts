import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800', 
    },
    secondary: {
      main: '#ffffff', 
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff', 
    },
    text: {
      primary: '#212121', 
      secondary: '#757575', 
    },
  },
  typography: {
    fontFamily: 'Raleway',
  },
});

export default theme;
