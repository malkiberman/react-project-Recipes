# Recipe API

## Description
This API allows users to view, add, and update recipes.  
- Any user can view recipes.  
- Only authenticated users can add recipes.  
- Users can only update their own recipes.  

## Installation
1. Clone the repository:  
   ```sh
   git clone <repository-url>
   cd <project-folder>
Install dependencies:



Start the server:

cd server
npm install
npm start

Start the client:

cd client
npm install
npm start

Recent Changes in the server
1. Users can only update their own recipes
Before: Any user could update any recipe.
Now: A user can only update recipes they have created.

2. Only authenticated users can add recipes
This ensures that anonymous users cannot add new recipes.

Code Changes
Updated Recipe Update Logic
Before:

```js
router.put('/', authMiddleware, (req, res) => {
    const { title, description, products, ingredients, instructions } = req.body;
    const id = parseInt(req.header('recipe-id'));
    const db = JSON.parse(fs.readFileSync(dbPath));

    const recipe = db.recipes.find(recipe => recipe.id === id);
    if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }

    recipe.title = title;
    recipe.description = description;
    recipe.products = products;
    recipe.ingredients = ingredients;
    recipe.instructions = instructions;
    
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    res.json({ message: "Recipe updated", recipe });
});
```
After:

```js
router.put('/', authMiddleware, (req, res) => {
    const { title, description, products, ingredients, instructions } = req.body;
    const id = parseInt(req.header('recipe-id'));
    const userId = req.header('user-id'); // Get user ID from header
    const db = JSON.parse(fs.readFileSync(dbPath));

    const recipe = db.recipes.find(recipe => recipe.id === id);
    if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }

    if (recipe.authorId !== userId) {
        return res.status(403).json({ message: "You can only update your own recipes" });
    }

    recipe.title = title;
    recipe.description = description;
    recipe.products = products;
    recipe.ingredients = ingredients;
    recipe.instructions = instructions;

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    res.json({ message: "Recipe updated", recipe });
});
```

there are several changes in the variables's namemes....

there are no more changes in the code.


Notes
authMiddleware ensures authentication for protected routes.
authorId is stored for each recipe and checked before updates.
