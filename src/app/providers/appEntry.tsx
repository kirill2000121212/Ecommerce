import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {router} from "@/app/providers/router.tsx";
import {store} from "@/app/providers/store.ts";
import {Provider} from "react-redux";
import '@/app/styles/globalStyle.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
<Provider store={store}>
    <RouterProvider router={router}/>
</Provider>
)