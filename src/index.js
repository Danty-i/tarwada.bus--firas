
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import "./index.css";
import UserDashboard from "./pages/UserDashboard/User_dashboard";
import Reservations from "./pages/UserDashboard/reservations";
import NewTicket from "./pages/UserDashboard/new-ticket";



// تعريف المسارات
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1> SORRY..........</h1>
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/userdashboard",
    element: <UserDashboard />,
  },
  {
    path: "/new-ticket",  
    element: <NewTicket />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  }
]);

// إنشاء جذر التطبيق
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

