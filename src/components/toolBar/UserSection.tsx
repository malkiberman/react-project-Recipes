import React, { useContext } from "react";
import { UserContext } from "../login/context/userContext";
import UserNameAvatar from "../login/updateComponent/username+avatar";
import Login from "../login/loginComponent/Login";
import { Box } from "@mui/material";

const UserSection = ({ handleLogin }: { handleLogin: (user: any) => void }) => {
  const userContext = useContext(UserContext);
  const { currentUser } = userContext ?? { currentUser: null };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {currentUser ? (
        <UserNameAvatar />
      ) : (
        <Login login={handleLogin} />
      )}
    </Box>
  );
};

export default UserSection;
