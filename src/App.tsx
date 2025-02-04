import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { UserProvider } from './components/login/context/userContext';
import { ThemeProvider } from '@emotion/react';
import theme from './them';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
    </ThemeProvider>
  );
};

export default App;
