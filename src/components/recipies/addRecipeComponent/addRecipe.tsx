
import { Button } from "@mui/material";
import { FC, useState } from "react";
import { recipesStore } from "../mobx/recipeStore"; // ייבוא MobX
import AddRecipeForm from "./addRecipeForm";
import { observer } from "mobx-react-lite";

interface AddRecipeProps {
  userId: number | undefined;
}

const AddRecipe: FC<AddRecipeProps> = observer(({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddRecipe = async (data: any) => {
    const newRecipe = { ...data, authorId: userId };

    await recipesStore.addRecipe(newRecipe, userId || 0);

    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setIsOpen(true)}
        sx={{
          position: "fixed",
          bottom: 0,
          left: "10%",
          button: "5%",
          transform: "translateX(-50%)",
          backgroundColor: "#FFA500",
          color: "secondary",
          padding: "15px 30px",
          fontSize: "18px",
          borderRadius: "30px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          "&:hover": {
            backgroundColor: "primary",
          },
        }}
      >
        Add Recipe
      </Button>
      {isOpen && <AddRecipeForm onSubmit={handleAddRecipe} />}
    </>
  );
});

export default AddRecipe;
