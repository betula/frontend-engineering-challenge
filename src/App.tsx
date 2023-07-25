import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { CreateRecipePage } from "./components/CreateRecipePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/create-recipe",
    element: <CreateRecipePage />,
  },
]);

export const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
};
