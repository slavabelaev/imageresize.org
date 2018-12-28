import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';

lightBlue.light = lightBlue[300];
lightBlue.main = lightBlue[400];
lightBlue.dark = lightBlue[500];
lightGreen.contrastText = "rgba(255, 255, 255, 1)";

lightGreen.light = lightGreen[300];
lightGreen.main = lightGreen[400];
lightGreen.dark = lightGreen[500];
lightGreen.contrastText = "rgba(255, 255, 255, 1)";

const theme = createMuiTheme({
  custom: {
    
  },
  shadows: [null],
  palette: {
    primary: lightBlue,
    secondary: lightGreen,
    background: {
      default: '#fff'
    },
    grey: {
      50: '#FBFCFD',
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
    color: '#616161',
    headline: {
      color: '#616161'
    },
    title: {
      color: '#616161'
    },
    subheading: {
      color: '#9E9E9E'
    },
    body2: {
      color: '#9E9E9E'
    },
    body1: {
      color: '#9E9E9E',
    },
    button: {
      color: '#616161',
      fontWeight: 400,
      fontSize: 14,
      textTransform: 'initial'
    },
    h1: {
      color: '#616161',
      marginBottom: 8
    },
    h2: {
      color: '#616161',
      marginBottom: 8
    },
    h3: {
      color: '#616161',
      marginBottom: 8
    },
    h4: {
      color: '#616161',
      marginBottom: 8
    },
    h5: {
      color: '#616161',
      marginBottom: 8
    },
    h6: {
      color: '#616161',
      marginBottom: 8
    },
    subtitle1: {
      color: '#9E9E9E',
      fontSize: '1.125rem'
    },
    subtitle2: {
      color: '#9E9E9E'
    },
    body1Next: {
      color: '#9E9E9E'
    },
    body2Next: {
      color: '#9E9E9E'
    },
    buttonNext: {
      color: '#616161'
    },
    captionNext: {
      color: '#616161'
    },
    overline: {
      color: '#616161'
    }
  }
});

export default theme;