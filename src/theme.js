import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#008080' }, // teal
    secondary: { main: '#00bfa5' },
  },
  typography: {
    fontFamily: 'Work Sans, sans-serif',
  },
});

export default theme;
