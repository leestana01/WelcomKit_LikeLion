import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RoadMapContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100px;
    background: linear-gradient(150deg, #1C4117, #326A2C, #1C4117);
    gap: 5px;

    font-family: LINE-Bd;
    border-bottom : 2px solid #1C4117;
    cursor: pointer;
`
const ButtonText = styled.p`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`

export default function Component(){
    const navigate = useNavigate();
    return (
        <RoadMapContainer onClick={() => navigate("/main/info/roadmap")}>
            <p> 트랙별 </p>
            <ButtonText> RoadMap </ButtonText>
            <p> 한눈에 보기 </p>
        </RoadMapContainer>
    )
}