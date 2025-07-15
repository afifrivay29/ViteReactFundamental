import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Homepage"
import About from "../pages/About"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    }
])