import React,{ useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
// import { useDispatch } from "react-redux";
// import { setUnauthorized } from "../../features/authorizer/authSlice";
// import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  const adminSignout = async ()=>{
    signOut(auth).then(()=>{
      console.log('Logout success...');
      // navigate('/',{replace:true})
      // return dispatch(setUnauthorized());
    }).catch((err) => console.log(err))
  }

  return (
    <Box sx={{display:'flex', justifyContent:'space-between', p:2}}>

      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        {/* <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        <IconButton onClick={adminSignout}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar