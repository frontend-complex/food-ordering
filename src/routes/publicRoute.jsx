import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import RestaurentDetails from "../pages/RestaurentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <RestaurentDetails /> },
      { path: "/offer", element: <Home /> },
      { path: "/restaurants", element: <RestaurentDetails /> },
      { path: "/track-order", element: <Home /> },
    ],
  },
]);

export default router;
