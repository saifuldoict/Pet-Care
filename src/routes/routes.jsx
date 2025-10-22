import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import MyProfilePage from "../pages/MyProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


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
                element:<ServicesPage/>,
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
            }
            
        ]

    }
])

export default router