import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import lightGreen from '@material-ui/core/colors/lightGreen';
import red from '@material-ui/core/colors/red';
// App Font
import './assets/fonts/Gotham/Gotham.css';

const white = 'rgba(255,255,255,1)';

lightBlue.light = lightBlue[300];
lightBlue.main = lightBlue[400];
lightBlue.dark = lightBlue[500];
lightBlue.contrastText = white;

lightGreen.light = lightGreen[300];
lightGreen.main = lightGreen[400];
lightGreen.dark = lightGreen[500];
lightGreen.contrastText = white;

red.light = red[300];
red.main = red[400];
red.dark = red[500];

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

const dashedBorderImageDark = `url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: ${grey[600]}; stroke-width: 1; stroke-dasharray: 7 14'/></svg>")`;
const dashedBorderImagePrimary = dashedBorderImageDark.replace(/stroke:.*?;/, `stroke: ${lightBlue.main};`);

const fontFamily = '"Gotham", "Roboto", "Helvetica", "Arial", sans-serif';

const theme = createMuiTheme({
  states: {
    hover: {
      boxShadow: `${lightBlue.main} 0 0 0 1px`
    },
    selected: {
      boxShadow: `${lightBlue.main} 0 0 0 3px`
    }
  },

  spacing: {
    unit: spacing.unit
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1170,
      xl: 1920,
    }
  },
  shadows: ['none'],
  palette: {
    white: white,
    primary: lightBlue,
    secondary: lightGreen,
    error: red,
    grey: grey,
    background: {
      default: white
    },
    divider: grey[200],
    border: {
      light: grey[200],
      dark: grey[500],
      dashedBorderImageDark: dashedBorderImageDark,
      dashedBorderImagePrimary: dashedBorderImagePrimary
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
      fontWeight: 400,
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
      fontSize: spacing.unit * 2,
      textTransform: 'initial'
    },
    h1: {
      fontFamily: fontFamily,
      fontWeight: 400,
      fontSize: spacing.unit * 4.5,
      color: grey[700]
    },
    h2: {
      fontFamily: fontFamily,
      fontSize: spacing.unit * 3.5,
      fontWeight: 400,
      color: grey[700]
    },
    h3: {
      fontFamily: fontFamily,
      fontSize: spacing.unit * 3,
      fontWeight: 400,
      color: grey[700]
    },
    h4: {
      fontFamily: fontFamily,
      fontSize: spacing.unit * 2.5,
      color: grey[700]
    },
    h5: {
      fontFamily: fontFamily,
      fontSize: spacing.unit * 2,
      color: grey[700]
    },
    h6: {
      fontFamily: fontFamily,
      fontSize: spacing.unit * 1.5,
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