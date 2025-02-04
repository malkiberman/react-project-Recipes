
Final React Project - Recipes and Authentication Process

פרויקט גמר - מתכונים ותהליך אימות

This is a React 19 project featuring a recipe management system with account creation and login functionality. Logged-in users can add new recipes, while all users can view the recipe list. The project integrates a client-side application written in React with a Node.js server-side component.

Key Technologies

React 19 with TypeScript

React Router for navigation management

MUI for UI styling

Yup + React Hook Form for recipe submission form validation

Context API + Reducer for global state management of login

MobX for managing recipe state

Fetch / Axios for API calls with predefined error handling (e.g., 401 errors)

Node.js + Express for the backend server

Project Structure

📦 project-root
 ┣ 📂 client  # Frontend - React
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 App.tsx
 ┃ ┃ ┣ 📜 index.tsx
 ┃ ┃ ┗ ...
 ┃ ┣ 📜 package.json
 ┃ ┣ 📜 .gitignore
 ┃ ┗ 📜 README.md
 ┣ 📂 server  # Backend - Node.js
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📂 controllers
 ┃ ┃ ┣ 📂 models
 ┃ ┃ ┗ 📜 server.ts
 ┃ ┣ 📜 package.json
 ┃ ┣ 📜 .gitignore
 ┃ ┗ 📜 README.md
 ┣ 📜 .gitignore
 ┗ 📜 README.md (if applicable)

Installation and Execution

1. Install Dependencies

Run the following commands in the root project directory:

cd client
npm install
cd ../server
npm install

2. Start the Server

cd server
npm run dev

3. Start the Client

cd client
npm start

Core Features

1. Login and Registration

Users can register and log in to the system.

After logging in, users can add new recipes.

2. Navigation Menu

Side/Top menu for displaying recipes.

Displays a list of all recipes from the server (accessible to all users).

Clicking on a recipe shows its details on the other side of the screen.

3. Recipe Submission (For Logged-in Users Only)

Form built with React Hook Form + Yup.

Data is sent to the server with User-ID for verification.

4. Recipe Updates (For Logged-in Users Only)

Users can update only their own recipes.

Notes

Separate .gitignore files exist for client/ and server/ to prevent uploading unwanted files.


🚀 Good luck! 😊

קובצי .gitignore קיימים בנפרד עבור client/ ו-server/ למניעת העלאת קבצים לא רצויים.

🚀 בהצלחה! 😊

