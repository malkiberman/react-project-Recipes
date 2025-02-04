import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ShowAllRecipes from "./showAllrecipes";
import ShowRecipe from "./showRecipe";

const RecipesPage = () => {
  const { id } = useParams(); // בודק אם יש מתכון נבחר

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
 
      <ShowAllRecipes />
    
      {id && (
        <Box sx={{ flex: 1, padding: 2, overflowY: "auto" }}>
          <ShowRecipe />
        </Box>
      )}
    </Box>
  );
};

export default RecipesPage;
