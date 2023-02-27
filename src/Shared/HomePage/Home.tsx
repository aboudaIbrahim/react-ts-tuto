import React from "react";
import { Box, Stack, Typography } from "@mui/material";
export const Home = () => {
  return (
    <Box sx={{padding:8 , textAlign:'center'}}>
      <Typography variant="h4">Welcome to our Todo Small App</Typography>
      <Typography variant="subtitle1">
        this a small react ts app , Todo app , using the react concepts such as
        redux toolkit , Rtk Query , react router dom , Material UI
      </Typography>
    </Box>
  );
};
