import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';
// App Font
import './assets/fonts/Gotham/Gotham.css';

lightBlue.light = lightBlue[300];
lightBlue.main = lightBlue[400];
lightBlue.dark = lightBlue[500];
lightGreen.contrastText = "rgba(255, 255, 255, 1)";

lightGreen.light = lightGreen[300];
lightGreen.main = lightGreen[400];
lightGreen.dark = lightGreen[500];
lightGreen.contrastText = "rgba(255, 255, 255, 1)";

const fontFamily = '"Gotham", "Roboto", "Helvetica", "Arial", sans-serif';
const theme = createMuiTheme({
  custom: {

  },
  shadows: ["none"],
  palette: {
    primary: lightBlue,
    secondary: lightGreen,
    background: {
      default: '#fff'
    },
    grey: {
      50: '#FAFBFB',
      600: '#757575'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    border: {
      light: 'rgba(0, 0, 0, 0.12)',
      dark: 'rgba(0, 0, 0, 0.36)'
    },
    text: {
      primary: '#616161',
      secondary: '#757575'
    },
    action: {
      selectedBackground: 'rgba(0,0,0,.024)'
    }
  },
  shape: {
    borderRadius: 3
  },
  typography: {
    useNextVariants: true,
    fontFamily: fontFamily,
    color: '#616161',
    headline: {
      fontFamily: fontFamily,
      color: '#616161'
    },
    title: {
      fontFamily: fontFamily,
      color: '#616161'
    },
    subheading: {
      fontFamily: fontFamily,
      color: '#9E9E9E'
    },
    body2: {
      fontFamily: fontFamily,
      color: '#9E9E9E'
    },
    body1: {
      fontFamily: fontFamily,
      color: '#9E9E9E',
    },
    button: {
      fontFamily: fontFamily,
      color: '#616161',
      fontWeight: 400,
      fontSize: 14,
      textTransform: 'initial'
    },
    h1: {
      fontFamily: fontFamily,
      color: '#616161',
      marginBottom: 8
    },
    h2: {
      fontFamily: fontFamily,
      color: '#616161',
      marginBottom: 8
    },
    h3: {
      fontFamily: fontFamily,
      color: '#616161',
      marginBottom: 8
    },
    h4: {
      fontFamily: fontFamily,
      color: '#616161',
      marginBottom: 8
    },
    h5: {
      fontFamily: fontFamily,
      color: '#616161',
      marginBottom: 8
    },
    h6: {
      fontFamily: fontFamily,
      color: '#616161',
      marginBottom: 8
    },
    subtitle1: {
      fontFamily: fontFamily,
      color: '#9E9E9E',
      fontSize: '1.125rem'
    },
    subtitle2: {
      fontFamily: fontFamily,
      color: '#9E9E9E'
    },
    body1Next: {
      fontFamily: fontFamily,
      color: '#9E9E9E'
    },
    body2Next: {
      fontFamily: fontFamily,
      color: '#9E9E9E'
    },
    buttonNext: {
      fontFamily: fontFamily,
      color: '#616161'
    },
    captionNext: {
      fontFamily: fontFamily,
      color: '#616161'
    },
    overline: {
      fontFamily: fontFamily,
      color: '#616161'
    }
  }
});

export default theme;