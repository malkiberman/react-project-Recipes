
import { observer } from "mobx-react-lite";
import { recipesStore } from "./mobx/recipeStore";
import { Box, Typography, List, ListItem, Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import ToAddRecipe from "./addRecipeComponent/toAddRecipe";

const ShowAllRecipes = observer(() => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0, 
        width: 250,
        height: "100vh", 
        padding: 2, 
        borderLeft: "2px solid #ddd", 
        overflowY: "auto",
        backgroundColor: "#ffffff", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "space-between",
      }}
             className="custom-scrollbar"
    >
      <Box    >
        <Typography variant="h4" gutterBottom>Recipes</Typography>
        <List>
          {recipesStore.isLoading ? (
            <CircularProgress />
          ) : (
            recipesStore.recipes.map((recipe) => (
              <ListItem key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none", width: "100%" }}>
                  <Button variant="outlined" fullWidth>
                    {recipe.title}
                  </Button>
                </Link>
              </ListItem>
            ))
          )}
        </List>
      </Box>
      <Box sx={{ marginTop: "auto" }}>
        <ToAddRecipe /> 
        {/* הוספת רכיב ToAddRecipe בתחתית */}
      </Box>
    </Box>
  );
});

export default ShowAllRecipes;
