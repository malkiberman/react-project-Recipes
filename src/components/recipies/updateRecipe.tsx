


import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { recipesStore } from "./mobx/recipeStore";
import { Button, TextField, Modal, Box, Typography, Grid } from "@mui/material";

const modalStyle = {
  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
  width: "90%", maxWidth: 600, maxHeight: "80vh", bgcolor: "background.paper",
  border: "2px solid #ff9800", boxShadow: 24, p: 4, overflowY: "auto"
};

const UpdateRecipe = observer(() => {
  const { id } = useParams();
  const recipe = recipesStore.recipes.find((r) => r.id.toString() === id);
  const [open, setOpen] = useState(false);
  if (!recipe) return <div>Recipe not found</div>;
const newRecipe= {...recipe};
  const handleSubmit = (e:any) => {
    e.preventDefault(); recipesStore.updateRecipe(newRecipe); setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}
        sx={{ backgroundColor: "#2ecc71", color: "#fff", px: 3, py: 1.5, borderRadius: "30px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)", transition: "background-color 0.3s ease",
        "&:hover": { backgroundColor: "#27ae60" }}}>
        Update Recipe
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle} className="custom-scrollbar">
          <Typography variant="h6" component="h2" sx={{ textAlign: "center", mb: 2 }}>
            Update Recipe
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField label="Title" type="text" variant="outlined" fullWidth
              value={recipe.title} onChange={(e) => (newRecipe.title = e.target.value)}
              sx={{ marginBottom: 2 }}
            />

            <Grid container spacing={2}>
              {recipe.ingredients.map((ingredient, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <TextField label={`Ingredient ${index + 1}`} type="text" variant="outlined" fullWidth
                    value={ingredient} onChange={(e) => {
                      recipe.ingredients = [...newRecipe.ingredients.slice(0, index), e.target.value, ...newRecipe.ingredients.slice(index + 1)];
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            <Button variant="outlined" onClick={() => newRecipe.ingredients.push("")}
              sx={{ marginY: 2, display: "block", mx: "auto" }}>
              Add Ingredient
            </Button>

            <TextField label="Instructions" multiline rows={6} variant="outlined" fullWidth
              value={recipe.instructions} onChange={(e) => (newRecipe.instructions = e.target.value)}
              sx={{ marginBottom: 2 }}
            />

            <Button variant="contained" type="submit"
              sx={{ backgroundColor: "#2ecc71", color: "#fff", px: 3, py: 1.5, borderRadius: "30px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)", transition: "background-color 0.3s ease",
              "&:hover": { backgroundColor: "#27ae60" }}}>
              Update Recipe
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
});

export default UpdateRecipe;

