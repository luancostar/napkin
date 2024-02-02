import { createBrowserRouter } from "react-router-dom";
import SearchBook from "./components/Search";
import Home from "./pages/Home"

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/search",
        element: <SearchBook />,
    }
])

export default router