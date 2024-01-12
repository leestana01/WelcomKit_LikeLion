import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import Home from "./pages/Home/Home";

export default createBrowserRouter([
    {
        path: "/",
        element: <ForOutlet/>,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "home",
                element: <Home/>
            }
        ]
    }
]);