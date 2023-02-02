import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { auth } from "../../utils/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setAuthorized} from "../../features/authorizer/authSlice";

const Signin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { authorized } = useSelector((state) => state.authorizer);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // Set state as authorized and navigate to the dashboard.
          dispatch(setAuthorized());
          navigate("/dashboard", {replace:true});
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          alert(errorCode);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const provider = new GoogleAuthProvider();
  const googleSignin = async () => {
    try{

    signInWithPopup(auth, provider)
      .then((result) => {
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;

        dispatch(setAuthorized())
        navigate('/dashboard')

      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.customData.email;
        console.log(errorMessage);
      });

    }catch(error){
        console.log(error);
    }
    
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          minWidth: "400px",
          p: 5,
          height: "100vh",
          background: colors.primary[400],
          position: "relative",
        }}
      >
        <Box>
          <img
            alt="app-logo"
            width="120px"
            src={`/assets/logo.svg`}
            style={{ cursor: "pointer" }}
          />
        </Box>
        <Typography variant="h3" sx={{ fontWeight: "bold", mt: 5, mb: 3 }}>
          Hello Admin 👋
        </Typography>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            my: 2,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ my: 3 }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            type="submit"
            sx={{
              color: colors.grey[200],
              fontWeight: "bold",
              padding: 2,
              my: 2,
              textAlign: "center",
            }}
            variant="outlined"
            size="large"
          >
            Login
          </Button>
          <Typography sx={{ textAlign: "center" }}>OR</Typography>
          <Button
            onClick={googleSignin}
            sx={{
              color: colors.grey[200],
              fontWeight: "bold",
              padding: 2,
              my: 2,
              textAlign: "center",
            }}
            variant="outlined"
            size="medium"
          >
            <img
              src="/assets/search.png"
              alt="google"
              style={{ marginRight: "5px", width: "20px" }}
            />
            Login with Google
          </Button>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        p={5}
      >
        <img
          src="/assets/founders.svg"
          alt="founders"
          style={{ width: "35rem" }}
        />
        {/* <Box>
          <Typography variant="h2">Connecting Better.</Typography>
          <Typography veriant="h4">
            Connect Entrepreneurs and help them to build <br /> amazing things
            that people really want.
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Signin;
