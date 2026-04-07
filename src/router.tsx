import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATHS } from "./constants/paths";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <MainLayout />,
  },
  {
    path: PATHS.notFound,
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/not-found" />,
  },
]);

export default router;
