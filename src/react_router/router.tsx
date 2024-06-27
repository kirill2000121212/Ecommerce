import {createBrowserRouter} from "react-router-dom";
import SignUp from "@/pages/signUp/SignUp.tsx";
import {Layout} from "@components/simple/layout/Layout.tsx";
import Home from "@/pages/homePage/Home.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        handle: ({
            crumb: () => 'Ecommerce'
        }),
        children: [
            {
                path: '/',
                element: <Home/>,
                handle: ({
                    crumb: () => 'Ecommerce'
                })
            },
            {
                path: '/signup',
                element: <SignUp/>,
                handle: ({
                    crumb: () => 'Sign Up'
                })
            }
        ]
    }
])