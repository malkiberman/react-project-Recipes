import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, Box, IconButton, Modal } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { Recipe } from "../recipeData";


type RecipeFormData = Omit<Recipe, "id" | "authorId">;

const schema = Yup.object({
  title: Yup.string().required("Recipe name is required"),
  description: Yup.string().required("Description is required"),
  instructions: Yup.string().required("Instructions are required"),
  ingredients: Yup.array()
    .of(Yup.string().required("Ingredient cannot be empty"))
    .min(1, "At least one ingredient is required")
    .max(10, "You can add up to 10 ingredients")
    .default([]),
}).required();

const AddRecipeForm: FC<{ onSubmit: (data: RecipeFormData) => void }> = ({ onSubmit }) => {
  const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm<RecipeFormData>({
    defaultValues: { title: "", description: "", instructions: "", ingredients: [""] },
    resolver: yupResolver(schema),
  });

  const ingredients = watch("ingredients");

  const addIngredient = () => {
    if (ingredients.length < 10) {
      setValue("ingredients", [...ingredients, ""]);
    }
  };

  const removeIngredient = (index: number) => {
    setValue("ingredients", ingredients.filter((_, i) => i !== index));
  };

  return (
    <Modal open={true} onClose={() => { }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4,
        }}
      >
        <Controller
          name="title"
          control={control}
          render={({ field }) => <TextField {...field} label="Recipe Name" fullWidth error={!!errors.title} helperText={errors.title?.message} />}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => <TextField {...field} label="Description" multiline rows={3} fullWidth error={!!errors.description} helperText={errors.description?.message} />}
        />
        <Controller
          name="instructions"
          control={control}
          render={({ field }) => <TextField {...field} label="Instructions" multiline rows={4} fullWidth error={!!errors.instructions} helperText={errors.instructions?.message} />}
        />
        {ingredients.map((_, index) => (
          <Box key={index} display="flex" alignItems="center" gap={1}>
            <Controller
              name={`ingredients.${index}` as const}
              control={control}
              render={({ field }) => <TextField {...field} label={`Ingredient ${index + 1}`} fullWidth error={!!errors.ingredients?.[index]} helperText={errors.ingredients?.[index]?.message} />}
            />
            <IconButton onClick={() => removeIngredient(index)} disabled={ingredients.length === 1}>
              <Remove color={ingredients.length === 1 ? "disabled" : "error"} />
            </IconButton>
          </Box>
        ))}
        <Button variant="contained" onClick={addIngredient} disabled={ingredients.length >= 10} startIcon={<Add />}>Add Ingredient</Button>
        <Button type="submit" variant="contained" color="primary">Add Recipe</Button>
      </Box>
    </Modal>
  );
};

export default AddRecipeForm;

