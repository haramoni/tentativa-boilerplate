import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Dashboard } from "./Pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);
