import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";

import FirstPage from "./pages/FirstPage/FirstPage";

import Home from "./pages/HeaderPages/Home/Home";
import Introduction from "./pages/HeaderPages/Introduction/Introduction";
import Manitto from "./pages/HeaderPages/Manitto/Manitto";
import MyPage from "./pages/HeaderPages/MyPage/MyPage";

import BoxOpen from "./pages/WelcomeKit/BoxOpen/BoxOpen";
import BoxOpened from "./pages/WelcomeKit/BoxOpened/BoxOpened";
import LetterHome from "./pages/WelcomeKit/Letters/LetterHome";

import Togather from "./pages/InfoPages/Togather/Togather";
import RoadMap from "./pages/InfoPages/RoadMap/RoadMap";
import GuideBook from "./pages/InfoPages/GuideBook/GuideBook";
import LetsBingo from "./pages/InfoPages/LetsBingo/LetsBingo";

import ManagerPage from "./pages/ManagerPage/ManagerPage";
import ManagerHome from "./pages/ManagerPage/Contents/Home/ManagerHome";
import Letters from "./pages/ManagerPage/Contents/Letters/Letters";
import MyInfo from "./pages/ManagerPage/Contents/MyInfo/MyInfo";
import MyTeam from "./pages/ManagerPage/Contents/MyTeam/MyTeam";
import HandleManagers from "./pages/ManagerPage/Contents/HandleManagers/HandleManagers";
import HandleBabyLions from "./pages/ManagerPage/Contents/HandleManagers/HandleBabyLions";

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
                path: "mypage",
                element: <MyPage/>
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
    },
    {
        path: "/managerpage",
        element: <ManagerPage />,
        children: [
            {
                path: "",
                element: <ManagerHome/>
            },
            {
                path: "letters",
                element: <Letters/>
            },
            {
                path: "info",
                element: <MyInfo/>
            },
            {
                path: "team",
                element: <MyTeam/>
            },
            {
                path: "handle-managers",
                element: <HandleManagers/>
            },
            {
                path: "handle-babylions",
                element: <HandleBabyLions/>
            }
        ]
    },
]);