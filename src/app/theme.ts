import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      drawerWidth: number;
      borderRadius: number;
      colors: {
        turquoise: string;
        backgroundDark: string;
        backgroundLight: string;
      };
    };
  }

  interface ThemeOptions {
    custom: {
      drawerWidth?: number;
      borderRadius?: number;
      colors?: {
        turquoise?: string;
        backgroundDark: string;
        backgroundLight: string;
      };
    };
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundImage: "none",
          border: "none",
          backgroundColor: "#151C3A",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundImage: "none",
          border: "none",
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        paper: {
          boxShadow: "none",
          backgroundImage: "none",
          border: "none",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundImage: "none",
          border: "none",
        },
      },
    },
  },
  palette: {
    mode: "dark",

    background: {
      default: "#000420",
      paper: "#000420",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B3B8C7",
      disabled: "#7A7F99",
    },
  },
  custom: {
    drawerWidth: 240,
    borderRadius: 12,
    colors: {
      turquoise: "#6CD8D2",
      backgroundDark: "#000420",
      backgroundLight: "#151C3A",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
