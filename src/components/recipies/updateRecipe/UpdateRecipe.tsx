import  { useState } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { Modal} from "@mui/material";
import { ModalContent } from './ModalContent';
import { RecipeButton } from './RecpeButton';
import { recipesStore } from "../mobx/recipeStore";

const UpdateRecipe = observer(() => {
  const { id } = useParams();
  const recipe = recipesStore.recipes.find((r) => r.id.toString() === id);
  const [open, setOpen] = useState(false);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <RecipeButton onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <ModalContent recipe={recipe} handleClose={handleClose} />
      </Modal>
    </div>
  );
});

export default UpdateRecipe;
