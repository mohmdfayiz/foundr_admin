import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <>
      <Box>
        <Skeleton variant="rectangular" width={250} height={140} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton width="60%" />
          <Skeleton />
          <Skeleton />
        </Box>
      </Box>
    </>
  );
};

export default LoadingSkeleton;
