import  { ChangeEvent } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";

const buttonStyle = {
  backgroundColor: "#ff9800",
  color: "white",
  '&:hover': {
    backgroundColor: "#e68900",
  }
};

type UserUpdateModalProps = {
  open: boolean;
  onClose: () => void;
  updatedUser: any;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onUpdate: () => void;
};

const UserUpdateModal = observer(({ open, onClose, updatedUser, onInputChange, onUpdate }: UserUpdateModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={updatedUser.name}
          onChange={onInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Last Name"
          name="lname"
          value={updatedUser.lname}
          onChange={onInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={updatedUser.email}
          onChange={onInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone"
          name="phone"
          type="number"
          value={updatedUser.phone}
          onChange={onInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={updatedUser.address}
          onChange={onInputChange}
        />
        <Button onClick={onUpdate} sx={buttonStyle}>
          Update
        </Button>
      </Box>
    </Modal>
  );
});

export default UserUpdateModal;
