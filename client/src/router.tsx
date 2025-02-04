import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayOut";
import HomePage from "./components/toRoure/homePage";
import About from "./components/toRoure/about";
import RecipesPage from "./components/recipies/RecipesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/Recipes", element: <RecipesPage /> }, // מציג את כל המתכונים
      { path: "/Recipes/:id", element: <RecipesPage /> }, // מציג את כולם + המתכון הנבחר
    ],
  },
]);
