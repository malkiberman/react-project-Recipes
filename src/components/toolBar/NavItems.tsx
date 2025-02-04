import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Restaurant, Home, Info } from "@mui/icons-material";

const navItems = [
  { label: "Home", path: "/", icon: <Home /> },
  { label: "About", path: "/about", icon: <Info /> },
  { label: "Recipes", path: "/Recipes", icon: <Restaurant /> },
];
const NavItems = () => (
  <>
    {navItems.map((item, index) => (
      <Button key={index} component={Link} to={item.path} sx={{ color: "white", fontWeight: "bold" }}>
        {item.icon} {item.label}
      </Button>
    ))}
  </>
);

export default NavItems;
