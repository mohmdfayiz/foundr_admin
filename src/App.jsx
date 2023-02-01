import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";
import UnauthorizedRoutes from "./routes/UnauthorizedRoutes";
import { useSelector } from "react-redux"; 

function App() {

  const authorized = useSelector((state) => state.authorizer.authorized);
  const [theme,colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          {authorized ? <AuthorizedRoutes/> : <UnauthorizedRoutes/>}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
