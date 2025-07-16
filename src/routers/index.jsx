import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Homepage"
import About from "../pages/About"
import Blog from "../pages/blogs/Index"
import RootLayout from "../layouts/RootLayout"

export const router = createBrowserRouter([
   {
    path: "/",
    element: <RootLayout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/blog",
            element: <Blog />
        },
        {
            path: "/about",
            element: <About />
        }
    ]
   }
])