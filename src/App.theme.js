import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';
// App Font
import './assets/fonts/Gotham/Gotham.css';

const white = 'rgba(255,255,255,1)';

lightBlue.light = lightBlue[300];
lightBlue.main = lightBlue[400];
lightBlue.dark = lightBlue[500];
lightGreen.contrastText = white;

lightGreen.light = lightGreen[300];
lightGreen.main = lightGreen[400];
lightGreen.dark = lightGreen[500];
lightGreen.contrastText = white;

const grey = {
  50: '#FAFBFB',
  100: '#f5f5f5',
  200: '#e9e9e9',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#888888',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  'A100': '#d5d5d5',
  'A200': '#aaaaaa',
  'A400': '#303030',
  'A700': '#616161',
}

const spacing = {
  unit: 8
};

const fontFamily = '"Gotham", "Roboto", "Helvetica", "Arial", sans-serif';

const theme = createMuiTheme({
  spacing: {
    unit: spacing.unit
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1280,
      xl: 1920,
    }
  },
  shadows: ['none'],
  palette: {
    white: white,
    primary: lightBlue,
    secondary: lightGreen,
    grey: grey,
    background: {
      default: white
    },
    divider: grey[200],
    border: {
      light: grey[200],
      dark: grey[500]
    },
    text: {
      primary: grey[700],
      secondary: grey[600]
    }
  },
  shape: {
    borderRadius: 3
  },
  typography: {
    useNextVariants: true,
    color: grey[700],
    headline: {
      fontFamily: fontFamily,
      color: grey[700]
    },
    title: {
      fontFamily: fontFamily,
      color: grey[700]
    },
    subheading: {
      fontFamily: fontFamily,
      color: grey[600]
    },
    body2: {
      fontFamily: fontFamily,
      color: grey[600]
    },
    body1: {
      fontFamily: fontFamily,
      color: grey[600],
      fontSize: '1.125rem'
    },
    button: {
      fontFamily: fontFamily,
      color: grey[700],
      fontSize: 14,
      textTransform: 'initial'
    },
    h1: {
      fontFamily: fontFamily,
      color: grey[700]
    },
    h2: {
      fontFamily: fontFamily,
      color: grey[700]
    },
    h3: {
      fontFamily: fontFamily,
      color: grey[700]
    },
    h4: {
      fontFamily: fontFamily,
      color: grey[700]
    },
    h5: {
      fontFamily: fontFamily,
      color: grey[700]
    },
    h6: {
      fontFamily: fontFamily,
      color: grey[700]
    },
    subtitle1: {
      fontFamily: fontFamily,
      color: grey[600]
    },
    subtitle2: {
      fontFamily: fontFamily,
      color: grey[600]
    },
    body1Next: {
      fontFamily: fontFamily,
      color: grey[600]
    },
    body2Next: {
      fontFamily: fontFamily,
      color: grey[600]
    },
    buttonNext: {
      fontFamily: fontFamily,
      color: grey[700]
    },
    captionNext: {
      fontFamily: fontFamily,
      color: grey[700]
    },
    overline: {
      fontFamily: fontFamily,
      color: grey[700]
    }
  }
});

export default theme;