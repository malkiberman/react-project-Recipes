


import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { recipesStore } from "./mobx/recipeStore";
import { Box, Typography, Paper, Button, Fade } from "@mui/material";
import { Recipe } from "./recipeData";
import UpdateRecipe from "./updateRecipe";
import { observer } from "mobx-react-lite";

const getIngredientEmoji = (ingredient: string) => {
  const map: Record<string, string> = {
    egg: "🥚", milk: "🥛", cheese: "🧀", meat: "🍖", chicken: "🍗",
    carrot: "🥕", apple: "🍎", tomato: "🍅", salad: "🥗", bread: "🍞",
    flour: "🛍", sugar: "🍬", rice: "🍚", pasta: "🍝", pizza: "🍕",
    chocolate: "🍫", cake: "🍰", pancake: "🥞", cookie: "🍪", "cake slice": "🍰",
    "ice cream": "🍦", pie: "🥧", muffin: "🧁", potato: "🥔", onion: "🧅",
    pepper: "🌶", cucumber: "🥒", avocado: "🥑", strawberry: "🍓", blackberry: "🍇",
    cherry: "🍒", pineapple: "🍍", mango: "🥭", kiwi: "🥝", peach: "🍑", pear: "🍐"
  };
  return map[ingredient.toLowerCase()] || "🔸";
};

const ShowRecipe = observer(() => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (id) {
      const numericId = Number(id);
      if (!isNaN(numericId)) setRecipe(recipesStore.getRecipeById(numericId) || null);
    }
  }, [id]);

  if (!recipe) return <h1>choose a recipe</h1>;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", width: "100vw", minHeight: "100vh", background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", padding: "50px 0", overflow: "hidden" }}>
      <Fade in timeout={800}>
        <Box className="custom-scrollbar" sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "auto", p: 2, overflow: "hidden" }}>
          <Paper className="custom-scrollbar" sx={{ width: "500px", maxHeight: "calc(100vh - 100px)", margin: "0 50px 70px", p: 4, borderRadius: "16px", boxShadow: "0 8px 16px rgba(0,0,0,0.2)", backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)", overflowY: "auto", zIndex: 1, scrollbarWidth: "thin", scrollBehavior: "smooth" }}>
            <Typography variant="h3" sx={{ color: "#2c3e50", fontWeight: 700, textAlign: "center", mb: 3, textShadow: "1px 1px 3px rgba(0,0,0,0.2)" }}>{recipe.title} 🍽️</Typography>
            <Box sx={{ textAlign: "center", mb: 3 }}>
            </Box>
            <Typography variant="h5" sx={{ color: "#34495e", textAlign: "center", mb: 2, borderBottom: "2px solid #3498db", pb: 1, width: "fit-content", mx: "auto" }}>Ingredients</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
              {recipe.ingredients.map((ingredient, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1, p: 1.5, backgroundColor: "#ecf0f1", borderRadius: "8px", transition: "transform 0.3s ease, background-color 0.3s ease", "&:hover": { transform: "scale(1.03)", backgroundColor: "#3498db", color: "#fff" } }}>
                  <Typography variant="body1">{getIngredientEmoji(ingredient)}</Typography>
                  <Typography variant="body1">{ingredient}</Typography>
                </Box>
              ))}
            </Box>
            <Typography variant="h5" sx={{ color: "#34495e", textAlign: "center", mb: 2, borderBottom: "2px solid #3498db", pb: 1, width: "fit-content", mx: "auto" }}>Instructions</Typography>
            <Typography sx={{ color: "#2c3e50", lineHeight: 1.8, fontSize: "1.2rem", textAlign: "center" }}>{recipe.instructions}</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
              <Button sx={{ backgroundColor: "primary", color: "secondary", px: 3, py: 1.5, borderRadius: "30px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", transition: "background-color 0.3s ease", "&:hover": { backgroundColor: "#primary" } }} onClick={() => alert("Recipe saved successfully! 🎉")}>Save Recipe 💾</Button>
              <UpdateRecipe />
            </Box>
          </Paper>
        </Box>
      </Fade>
    </Box>
  );
});

export default ShowRecipe;
