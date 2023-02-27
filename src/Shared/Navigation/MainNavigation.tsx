import React from "react";
import { NavLinks } from "./NavLinks";
import { AppBar, Toolbar, Stack, Typography, IconButton } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
export const MainNavigation = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton color="inherit" edge="start" size="large">
          <ListAltIcon />
        </IconButton>
        <Typography sx={{flexGrow:1}}>React-Todo</Typography>
        <NavLinks />
      </Toolbar>
    </AppBar>
  );
};
