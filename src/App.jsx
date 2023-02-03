import React, { useEffect } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";
import UnauthorizedRoutes from "./routes/UnauthorizedRoutes";
import { useSelector, useDispatch } from "react-redux";
import { setAuthorized, setUnauthorized } from "./features/authorizer/authSlice";
import { onAuthStateChanged } from "firebase/auth"; 
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";

function App() {

  const [theme,colorMode] = useMode();
  const authorized = useSelector((state) => state.authorizer.authorized);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const authStateListener = () =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        console.log("----- User is signed in -----");
        navigate('/dashboard',{replace:true})
        return dispatch(setAuthorized());
      } else {
        console.log("----- User is signed out -----");
        navigate('/',{replace:true})
        return dispatch(setUnauthorized())
      }
    });
  }

  useEffect(() => {
    authStateListener();
  },[])
  

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
