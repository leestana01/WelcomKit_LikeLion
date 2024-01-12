import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import MyInfo from "../Components/MyInfo/MyInfo";

export default function Component() {
    return (
        <>
            <Header/>
            <Outlet/>
            <MyInfo/>
        </>
    )
};