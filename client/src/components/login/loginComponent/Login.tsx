import { useContext, useState, FormEvent } from "react";
import { UserContext } from "../context/userContext";
import { Button, Modal, Box, Typography, TextField } from "@mui/material";
import { UserData } from "../reduser/rreducerUser";
import { loginUser, registerUser } from "../api/api";

const style = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", border: "2px solid #000", boxShadow: 24, p: 4 };

const Login = ({ login }: { login: (user: UserData) => void }) => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [success, setSuccess] = useState(true);
  const [successCreate, setSuccessCreate] = useState(false);

  const context = useContext(UserContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false); setSuccess(true); setSuccessCreate(false); };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    if (context) {
      try {
        if (isLogin) {
          const currentUser = await loginUser(email, password);
          login(currentUser);
          context.currentUser = currentUser;
          setSuccess(true);
        } else {
          const newUser = await registerUser({
            email, password, name: data.get('firstName') as string,
            lname: data.get('lastName') as string, addres: data.get('address') as string,
            phone: data.get('phone') as string
          });
          context.currentUser = newUser;
          setSuccessCreate(true);
          setIsLogin(true);
        }
        setOpen(false);
      } catch (error) {
        setSuccess(false);
      }
    }
  };

  return (
    <>
      <Button onClick={handleOpen} color="secondary">Login</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">{isLogin ? "Login" : "Create User"}</Typography>
          <form onSubmit={handleSubmit}>
            <TextField name="email" label="Email" type="email" required fullWidth margin="normal" />
            <TextField name="password" label="Password" type="password" required fullWidth margin="normal" />
            {!isLogin && (
              <>
                <TextField name="firstName" label="First Name" required fullWidth margin="normal" />
                <TextField name="lastName" label="Last Name" fullWidth margin="normal" />
                <TextField name="address" label="Address" fullWidth margin="normal" />
                <TextField name="phone" label="Phone" fullWidth margin="normal" />
              </>
            )}
            <Button type="submit" variant="contained" color="primary" fullWidth>{isLogin ? "Login" : "Create Account"}</Button>
            {!isLogin && successCreate && <Typography>Your account has been created successfully!</Typography>}
            {isLogin && !success && <Typography color="error">Login failed. Please try again or create an account.</Typography>}
          </form>
          <Typography sx={{ mt: 2 }}>
            {isLogin ? (
              <span>Don't have an account? <Button onClick={() => { setIsLogin(false); setSuccess(true); }} color="primary">Create one</Button></span>
            ) : (
              <span>Already have an account? <Button onClick={() => { setIsLogin(true); setSuccessCreate(false); }} color="primary">Login</Button></span>
            )}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Login;
