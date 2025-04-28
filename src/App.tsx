import { Helmet } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

export function App() {
    return (
        <>
            <Helmet titleTemplate="%s | Júlia App" />
            <RouterProvider router={router} />
        </>
    );
}
