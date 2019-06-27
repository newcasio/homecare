export default {
  palette: {
    type: "light",
    primary: {
      main: "#01838a",
      contrastText: "#ffffff",
      light: "#EBEBEB"
    },
    secondary: {
      // main: "#20ea3b",
      main: "#262f34",
      contrastText: "#ffffff"
    },
    text: {
      primary: "#000000",
      secondary: "#d0d0d0",
      button: "#d0d0d0",
      third: "#EC1C24"
    },
    footer: {
      primary: "#262f34"
    },
    action: {
      hover: "#d0d0d0"
    }
  },
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: "1.3rem",
      lineHeight: 1.6,
      fontWeight: 400,
      fontFamily: "Montserrat, sans-serif",
      useNextVariants: true
    },
    h4: {
      fontSize: "2rem",
      fontWeight: "bold",
      fontFamily: "Montserrat, sans-serif",
      useNextVariants: true
    },
    h5: {
      fontSize: "1.6rem",
      fontWeight: "bold",
      fontFamily: "Montserrat, sans-serif",
      useNextVariants: true
    },
    h6: {
      fontSize: "1.4rem",
      fontWeight: 500,
      fontFamily: "Montserrat, sans-serif",
      useNextVariants: true
    },
    subtitle1: {
      fontSize: "1.1rem",
      fontWeight: 400,
      fontFamily: "Montserrat, sans-serif",
      useNextVariants: true
    },
    subtitle2: {
      fontSize: "0.9rem",
      fontWeight: "bold",
      fontFamily: "Montserrat, sans-serif",
      useNextVariants: true
    },
    subtitle3: {
      fontSize: "0.7rem",
      fontWeight: "bold",
      fontFamily: "Montserrat, sans-serif",
      useNextVariants: true
    },
    body1: {
      fontSize: "1.0rem",
      fontFamily: "Montserrat, sans-serif",
      useNextVariants: true
    },
    body2: {
      fontSize: "0.9rem",
      fontFamily: "Montserrat, sans-serif",
      useNextVariants: true
    },
    overline: {
      fontFamily: "Montserrat, sans-serif"
    },
    caption: {
      fontSize: "1.1rem",
      fontWeight: 400,
      fontFamily: "Montserrat, sans-serif",
      color: "#ffffff",
      useNextVariants: true
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
      fontFamily: "Montserrat, sans-serif",
      textTransform: "capitalize"
    }
  },
  overrides: {
    MuiCheckbox: {
      colorSecondary: {
        "&$checked": {
          color: "#02AEB8"
        }
      }
    },
    MuiRadio: {
      colorSecondary: {
        "&$checked": {
          color: "#02AEB8"
        }
      }
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#000000"
        }
      }
    }
  }
};
