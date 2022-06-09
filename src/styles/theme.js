import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fc1368',
      light: '#ff6095',
      dark: '#c2003e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#136cfb',
      light: '#6d99ff',
      dark: '#0042c7',
      contrastText: '#ffffff',
    },
    neutral: {
      main: '#616161',
    },
  },

  typography: {
    h4: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 300,
    },
    h5: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
    },
  },
});

export default theme;
