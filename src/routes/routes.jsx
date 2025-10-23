import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPageCard";
import MyProfilePage from "../pages/MyProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage";
import WinterCareTips from "../components/WinterCareTips";



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
                path:"/services-details/:id",
                element:<PrivateRoute>
                    <ServiceDetailsPage/>
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
            },
            {
                path:'/service',
                element:<WinterCareTips/>
            }
            
        ]

    }
])

export default router