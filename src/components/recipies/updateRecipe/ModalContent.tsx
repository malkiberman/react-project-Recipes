import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { recipesStore } from "../mobx/recipeStore";

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 600,
  maxHeight: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #ff9800", 
  boxShadow: 24,
  p: 4,
  overflowY: "auto", 
};

export const ModalContent = ({ recipe, handleClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    recipesStore.updateRecipe(recipe);
    handleClose();
  };

  return (
    <Box sx={modalStyle}>
      <Typography variant="h6" component="h2" sx={{ textAlign: "center", mb: 2 }}>
        Update Recipe
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          type="text"
          variant="outlined"
          fullWidth
          value={recipe.title}
          onChange={(e) => (recipe.title = e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Grid container spacing={2}>
          {recipe.ingredients.map((ingredient, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <TextField
                label={`Ingredient ${index + 1}`}
                type="text"
                variant="outlined"
                fullWidth
                value={ingredient}
                onChange={(e) => {
                  const updatedIngredients = [...recipe.ingredients];
                  updatedIngredients[index] = e.target.value;
                  recipe.ingredients = updatedIngredients;
                }}
              />
            </Grid>
          ))}
        </Grid>

        <Button
          variant="outlined"
          onClick={() => recipe.ingredients.push("")}
          sx={{ marginY: 2, display: "block", mx: "auto" }}
        >
          Add Ingredient
        </Button>

        <TextField
          label="Instructions"
          multiline
          rows={6}
          variant="outlined"
          fullWidth
          value={recipe.instructions}
          onChange={(e) => (recipe.instructions = e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
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
      </form>
    </Box>
  );
};
