import { useContext, useState } from "react";
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ChromePicker } from 'react-color';
import NavItems from "./NavItems";
import DrawerMenu from "./DrawerMenu";
import UserSection from "./UserSection";
import { UserContext } from "../login/context/userContext";

const DrawerAppBar = () => {
  const userContext = useContext(UserContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [toolbarColor, setToolbarColor] = useState("#ff9800");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const { currentUser, setCurrentUser } = userContext ?? { currentUser: null };
  const handleLogin = (user: any) => {
    setCurrentUser?.(user);
    console.log("User logged in:", user);
  };

  // Handle color change from color picker
  const handleColorChange = (color: any) => {
    setToolbarColor(color.hex);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: toolbarColor }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <UserSection handleLogin={handleLogin} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            🍽️ Malki & Ayala
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <NavItems />
          </Box>
          {/* Button to open color picker */}
          <IconButton onClick={() => setShowColorPicker(!showColorPicker)}>
            🎨
          </IconButton>
          {/* Show color picker */}
          {showColorPicker && (
            <Box sx={{ position: 'absolute', top: '60px', right: '10px' }}>
              <ChromePicker color={toolbarColor} onChange={handleColorChange} />
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <DrawerMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
};

export default DrawerAppBar;
