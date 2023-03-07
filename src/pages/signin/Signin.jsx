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
import {signInWithEmailAndPassword,} from "firebase/auth";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setAuthorized} from "../../features/authorizer/authSlice";
import { toast,Toaster } from "react-hot-toast";

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
          toast.error('Invalid credentials!')
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent:"center", alignItems:"center", height:"100vh" }}>
      <Toaster/>
      <Box
        sx={{
          p: 5,
          minWidth: "400px",
          height: "500px",
          borderRadius:"10px",
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
        <Typography variant="h3" sx={{ fontWeight: "bold", mt: 5 }}>
          Hello Admin 👋
        </Typography>
        <Typography>Signin to access your account</Typography>
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
            Sign in
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
