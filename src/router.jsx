import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search"


const router = createBrowserRouter ([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/search',
        element: <Search/>
    },
 
])

export default router