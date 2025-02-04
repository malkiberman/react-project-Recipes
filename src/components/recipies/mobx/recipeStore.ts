import { makeAutoObservable, runInAction } from "mobx";
import { Recipe } from "../recipeData";
import axios from "axios";

export class RecipesStore {
  recipes: Recipe[] = [];
  selectedRecipe: Recipe = { id: 0, title: '', description: '', authorId: 0, ingredients: [], instructions: '' }; // מתכון נבחר
  isLoading = false;
  URL = "http://localhost:3000/api/recipes";

  constructor() {
    makeAutoObservable(this);
    this.fetchRecipes();
  }

  selectRecipe(recipe: any) {
    this.selectedRecipe = recipe;
  }

  async fetchRecipes() {
    this.isLoading = true;
    console.log("Fetching recipes...");

    try {
      const response = await fetch(this.URL);
      const data = await response.json();
      runInAction(() => {
        this.recipes = data;
        this.isLoading = false;
      });
    } catch (error) {
      console.error("Error fetching recipes:", error);
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  getRecipeById(id: number) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  async addRecipe(newRecipe: Recipe, userId: number) {
    console.log("Attempting to add new recipe:", newRecipe);
    try {
      const response = await axios.post(this.URL, newRecipe, { headers: { 'user-id': userId } });

      runInAction(() => {
        newRecipe.id = response.data.recipe.id;
        this.recipes.push(newRecipe);
      });
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  }
  async updateRecipe(recipe: Recipe) {
    console.log("🔹 מנסה לעדכן מתכון:", recipe);
  
    try {
      const response = await fetch(this.URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "recipe-id": recipe.id.toString(),
          "user-id": recipe.authorId.toString(),
        },
        body: JSON.stringify(recipe),
      });
console.log(response);
console.log(recipe);

      
  
      if (response.ok) {
        const result = await response.json();
        console.log("✅ מתכון עודכן בהצלחה:", result.recipe);
        runInAction(() => {
          const index = this.recipes.findIndex(r => r.id === recipe.id);
          if (index !== -1) {
            this.recipes[index] = result.recipe;
          }
        });
      } else {
        console.error("❌ נכשל עדכון המתכון:", response.statusText);
      }
    } catch (error) {
      console.error("❌ שגיאה בעדכון מתכון:", error);
    }
  }
  

}

export const recipesStore = new RecipesStore();


