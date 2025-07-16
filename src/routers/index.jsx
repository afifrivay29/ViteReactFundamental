import { createBrowserRouter } from "react-router-dom"

import { posts, postById } from "../apis/loaders"

import Home from "../pages/Homepage"
import About from "../pages/About"
import Blog from "../pages/blogs/Index"
import Post from "../pages/blogs/_id"
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
            path: "/blog/:id",
            element: <Post />,
            loader: postById
        },
        {
            path: "/blog",
            element: <Blog />,
            loader: posts
        },
        {
            path: "/about",
            element: <About />
        }
    ]
   }
])