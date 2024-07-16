import {createBrowserRouter} from "react-router-dom";
import Home from "@/pages/homePage/ui/Home.tsx";
import SignUp from "@/pages/signUp/ui/SignUp.tsx";
import Login from "@/pages/login/ui/Login.tsx";
import Search from "@/pages/search/ui/Search.tsx";
import {BaseLayout} from "@/app/layouts/BaseLayout.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/>,
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
            },
            {
                path: '/login',
                element : <Login/>,
                handle: ({
                    crumb: () => 'Login'
                })
            },
            {
                path: '/search',
                element : <Search/>,
                handle: ({
                    crumb: () => 'Search'
                })
            }
        ]
    }
])