import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import recipeRoutes from './routes/recipes.js';

const app = express();
app.use(bodyParser.json());
//add cors
app.use(cors())

// מסלולים (Routes)
app.use('/api/user', authRoutes);
app.use('/api/recipes', recipeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
