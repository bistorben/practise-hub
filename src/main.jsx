import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import HeroBoschCom from "./components/HeroBoschCom.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Backend from "./components/backend/Backend.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "heroboschcom", element: <HeroBoschCom /> },
      { path: "backend", element: <Backend /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
