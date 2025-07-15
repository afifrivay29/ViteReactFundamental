import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Homepage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])