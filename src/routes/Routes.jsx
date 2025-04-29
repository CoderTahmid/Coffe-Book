import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    }
]);

export default routes;