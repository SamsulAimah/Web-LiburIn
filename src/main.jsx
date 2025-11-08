import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import NotFound from './pages/error';
import HomePage from './pages/home';
import MenuPage from './pages/menu';
import Layout from './components/Layout/Layouts'; // Import Layout Component

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />, // Login page does not need Navbar/Footer
  },
  {
    path: "/register",
    element: <RegisterPage />, // Register page does not need Navbar/Footer
  },
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/menu",
    element: (
      <Layout>
        <MenuPage />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
);
