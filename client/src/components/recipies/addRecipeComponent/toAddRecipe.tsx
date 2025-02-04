import { useContext } from "react";
import { UserContext } from "../../login/context/userContext";
import AddRecipe from "./addRecipe";

const ToAddRecipe = () => {
  const context = useContext(UserContext);

  const currentUser = context?.currentUser;

  return (
    <div style={{ position: "relative", zIndex: 200000000 }}>
      {currentUser ? (
        <AddRecipe userId={currentUser.id} />
      ) : (
        <div style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#f8d7da",
          color: "#721c24",
          padding: "10px 20px",
          textAlign: "center",
          borderTop: "2px solid #f5c6cb",
          fontWeight: "bold",
          fontSize: "1.1rem",
          zIndex: 20000000000
        }}>
          Please log in to add a recipe.
        </div>
      )}
    </div>
  );
};

export default ToAddRecipe;
