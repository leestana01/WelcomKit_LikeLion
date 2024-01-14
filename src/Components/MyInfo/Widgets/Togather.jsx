import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TogatherContainer = styled.div`
    display: flex;
    flex-direction: column;

    cursor: pointer;
`
const BackgroundImg = styled.img`
`

export default function Component(){
    const navigate = useNavigate();
    return (
        <TogatherContainer onClick={() => navigate("/main/info/togather")}>
            <BackgroundImg src="/img/togather.png"/>
        </TogatherContainer>
    )
}