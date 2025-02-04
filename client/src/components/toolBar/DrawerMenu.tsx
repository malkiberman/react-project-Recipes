
import { Drawer, Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Restaurant, Home, Info } from "@mui/icons-material";

const navItems = [
  { label: "Home", path: "/", icon: <Home /> },
  { label: "About", path: "/about", icon: <Info /> },
  { label: "Recipes", path: "/Recipes", icon: <Restaurant /> },
];

const DrawerMenu = ({ mobileOpen, handleDrawerToggle }: { mobileOpen: boolean, handleDrawerToggle: () => void }) => (
  <Box component="nav">
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          📌 Navigation
        </Typography>
        <Divider />
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={item.path}>
                {item.icon}
                <ListItemText primary={item.label} sx={{ ml: 1 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  </Box>
);

export default DrawerMenu;
