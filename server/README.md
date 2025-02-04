# NodeForRecipes

NodeForRecipes is a simple Node.js application that allows users to register, login, and manage recipes. The application uses Express.js for the server, and JSON files for data storage.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd nodeforrecipes
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
   or for development mode with file watching:
    ```sh
    npm run dev
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

### User Routes

- **Register a new user**
    - `POST /api/user/register`
    - Request body: `{ "email": "user@example.com", "password": "password" }`
    - Response: `{ "message": "User registered successfully", "userId": 123 }`

- **Login**
    - `POST /api/user/login`
    - Request body: `{ "email": "user@example.com", "password": "password" }`
    - Response: `{ "message": "Login successful", "user": { ...user } }`

- **Update user details**
    - `PUT /api/user`
    - Headers: `{ "user-id": "123" }`
    - Request body: `{ "firstName": "John", "lastName": "Doe", "email": "john@example.com", "address": "123 Main St", "phone": "123-456-7890" }`
    - Response: `{ ...updatedUser }`

### Recipe Routes

- **Get all recipes**
    - `GET /api/recipes`
    - Response: `[ ...recipes ]`

- **Add a new recipe**
    - `POST /api/recipes`
    - Headers: `{ "user-id": "123" }`
    - Request body: `{ "title": "Recipe Title", "description": "Recipe Description", "ingredients": ["ingredient1", "ingredient2"], "instructions": "Step by step instructions" }`
    - Response: `{ "message": "Recipe added", "recipe": { ...newRecipe } }`

## Middleware

- **authMiddleware**
    - This middleware checks if the user is authenticated by verifying the `user-id` header.

## Project Structure
