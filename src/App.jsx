import React, { useEffect } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";
import UnauthorizedRoutes from "./routes/UnauthorizedRoutes";
import { useSelector, useDispatch } from "react-redux";
import {
  setAuthorized,
  setUnauthorized,
} from "./features/authorizer/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

function App() {
  const [theme, colorMode] = useMode();
  const authorized = useSelector((state) => state.authorizer.authorized);
  const dispatch = useDispatch();

  useEffect(() => {
    const authStateListener = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          return dispatch(setAuthorized());
        } else {
          return dispatch(setUnauthorized());
        }
      });
    };
    authStateListener();
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {authorized ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
