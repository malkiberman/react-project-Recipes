import { Outlet } from "react-router";
import DrawerAppBar from "./toolBar/DrawerAppBar";
import { Box } from "@mui/material";

const AppLayout = () => {
  return (
    <>
      <DrawerAppBar />
      <Box sx={{ height: "100vh" }}>
        <Outlet /> 
      </Box>
    </>
  );
};

export default AppLayout;
