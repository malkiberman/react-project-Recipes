import { Button } from "@mui/material";
import { FC, MouseEventHandler } from "react";
interface RecipeButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export const RecipeButton: FC<RecipeButtonProps> = ({ onClick }) => (

  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    sx={{
      backgroundColor: "#2ecc71",
      color: "#fff",
      px: 3,
      py: 1.5,
      borderRadius: "30px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      transition: "background-color 0.3s ease",
      "&:hover": { backgroundColor: "#27ae60" },
    }}
  >
    Update Recipe
  </Button>
);
