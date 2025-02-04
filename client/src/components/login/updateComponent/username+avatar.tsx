import { ChangeEvent, useContext, useState, useEffect } from "react";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { UserContext } from "../context/userContext";
import { deepOrange } from "@mui/material/colors";
import { UserData } from "../reduser/rreducerUser";
import { updateUser } from "../api/api";
import UserUpdateModal from "./UserUpdateModal";
import { observer } from "mobx-react-lite";

const buttonStyle = {
  backgroundColor: "#ff9800",
  color: "white",
  '&:hover': {
    backgroundColor: "#e68900"
  }
};

const UserNameAvatar = observer(() => {
  const context = useContext(UserContext);
  const [isUpdate, setIsUpdate] = useState(false);
  const [tempUser, setTempUser] = useState<UserData | null>(null);

  useEffect(() => {
    if (context && context.currentUser) {
      setTempUser({ ...context.currentUser }); // שומר את העותק של currentUser
    }
  }, [context]);

  useEffect(() => {
    if (context && context.currentUser) {
      setTempUser({ ...context.currentUser });
    }
  }, [context?.currentUser]); 

  if (!context || !context.currentUser) return null;

  const { currentUser, userDispatch, setCurrentUser } = context;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempUser((prev) => prev ? { ...prev, [name]: value } : null); 
  };

  const handleOpenModal = () => {
    setTempUser({ ...currentUser }); 
    setIsUpdate(true);
  };

  const handleCloseModal = () => {
    setTempUser({ ...currentUser }); 
    setIsUpdate(false);
  };

  const handleUpdate = async () => {
    if (currentUser.id && tempUser) {
      try {
        const updated = await updateUser(currentUser.id, tempUser);
        console.log("Updated User:", updated);  

        userDispatch({
          type: "UPDATE_USER",
          data: updated,  
        });

        setCurrentUser(updated);  

        setIsUpdate(false);
        setTempUser(updated); 
      } catch (error) {
        console.error("Failed to update user", error);
      }
    }
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar sx={{
        bgcolor: deepOrange[500],
        fontSize: '1.5rem',
        width: 50,
        height: 50
      }}>
        {currentUser.name ? currentUser.name[0] : "?"}
      </Avatar>
      <Typography sx={{
        fontWeight: 600,
        fontSize: '1.2rem',
        color: "#333",
        letterSpacing: 1
      }}>
        {currentUser.name || "Unknown"}
      </Typography>
      <Button onClick={handleOpenModal} sx={buttonStyle}>
        Update Profile
      </Button>

      {tempUser && (
        <UserUpdateModal
          open={isUpdate}
          onClose={handleCloseModal}
          updatedUser={tempUser}
          onInputChange={handleInputChange}
          onUpdate={handleUpdate}
        />
      )}
    </Stack>
  );
});

export default UserNameAvatar;
