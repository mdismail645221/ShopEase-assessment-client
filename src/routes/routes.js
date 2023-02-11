import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserSaveCart from "../pages/UserSaveCart/UserSaveCart";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>not found</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/saveCart',
                element: <UserSaveCart></UserSaveCart>
            },
        ]
    }
])