import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import MyProfilePage from "../pages/MyProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children:[
            {
                index:true,
                element:<HomePage/>,
                loader: ()=>fetch('../data.json')
            },
            {
                path:"/services",
                element:<PrivateRoute>
                    <ServicesPage/>
                </PrivateRoute>,
                loader: ()=>fetch('../data.json')
                
            },
            {
                path:"/my-profile",
                element:<MyProfilePage/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/register",
                element:<RegisterPage/>
            },
            {
                path:"/*",
                element:<ErrorPage/>
            }
            
        ]

    }
])

export default router