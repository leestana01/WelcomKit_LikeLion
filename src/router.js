import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import Home from "./pages/Home/Home";
import Manitto from "./pages/Manitto/Manitto";

export default createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/main",
        element: <ForOutlet/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "manitto",
                element: <Manitto/>
            }
        ]
    }
]);