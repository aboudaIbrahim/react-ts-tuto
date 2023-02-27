import React from "react";
import { Stack, Button, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../Navigation/NavLink.css";
export const NavLinks = () => {
  return (
    <Stack direction="row" spacing={2} className="nav-links">
      <NavLink to="/todos-list">Todos</NavLink>
      <NavLink to="/add-todo">Add Todos</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Log In </NavLink>
    </Stack>
  );
};
