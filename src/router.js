import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import Home from "./pages/Home/Home";
import Manitto from "./pages/Manitto/Manitto";
import WelcomeKit from "./pages/WelcomeKit/WelcomeKit";
import BoxOpen from "./pages/WelcomeKit/BoxOpen/BoxOpen";
import BoxOpened from "./pages/WelcomeKit/BoxOpened/BoxOpened.jsx";

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
            },
            {
                path: "welcomekit",
                element: <WelcomeKit/>,
            },
            {
                path: "welcomekit/boxopen",
                element: <BoxOpen/>
            },
            {
                path: "welcomekit/boxopened",
                element: <BoxOpened/>
            },
        ]
    }
]);