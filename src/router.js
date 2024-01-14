import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";

import FirstPage from "./pages/FirstPage/FirstPage";

import Home from "./pages/HeaderPages/Home/Home";
import Introduction from "./pages/HeaderPages/Introduction/Introduction";
import Manitto from "./pages/HeaderPages/Manitto/Manitto";

import BoxOpen from "./pages/WelcomeKit/BoxOpen/BoxOpen";
import BoxOpened from "./pages/WelcomeKit/BoxOpened/BoxOpened";
import LetterHome from "./pages/WelcomeKit/Letters/LetterHome";

import Togather from "./pages/InfoPages/Togather/Togather";
import RoadMap from "./pages/InfoPages/RoadMap/RoadMap";
import GuideBook from "./pages/InfoPages/GuideBook/GuideBook";
import LetsBingo from "./pages/InfoPages/LetsBingo/LetsBingo";

export default createBrowserRouter([
    {
        path: "/",
        element: <FirstPage />
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
                path: "introduction",
                element: <Introduction/>
            },
            {
                path: "manitto",
                element: <Manitto/>
            },
            {
                path: "welcomekit",
                children: [
                    {
                        path: "boxopen",
                        element: <BoxOpen/>
                    },
                    {
                        path: "boxopened",
                        element: <BoxOpened/>
                    },
                    {
                        path: "letterhome",
                        element: <LetterHome />
                    }
                ]
            },
            {
                path: "info",
                children: [
                    {
                        path: "togather",
                        element: <Togather/>
                    },
                    {
                        path: "roadmap",
                        element: <RoadMap/>
                    },
                    {
                        path: "guidebook",
                        element: <GuideBook />
                    },
                    {
                        path: "letsbingo",
                        element: <LetsBingo />
                    }
                ]
            },

        ]
    }
]);