import React from "react";
import ReactDOM from "react-dom/client";
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import App from "./App.tsx";
import SignupPage from "./pages/SignupPage/SignupPage.tsx";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/collections",
    element: <CollectionsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
