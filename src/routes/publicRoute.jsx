import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Home /> },
      { path: "/offer", element: <Home /> },
      { path: "/restaurants", element: <Home /> },
      { path: "/track-order", element: <Home /> },
    ],
  },
]);

export default router;
