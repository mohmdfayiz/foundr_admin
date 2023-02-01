import React from "react";
import { Box } from "@mui/material";

const Error404 = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", height:'80vh' }}
    >
      <img src="/assets/error-404.png" alt="404 icon" width={100} />
    </Box>
  );
};

export default Error404;
