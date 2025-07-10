import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/theme";

import Routing from "./app/routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
};

export default App;
