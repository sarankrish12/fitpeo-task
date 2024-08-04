// src/theme.ts

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    background: {
      default: "#1e1e2f",
      paper: "#2c2c3e",
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },
});

export default theme;
