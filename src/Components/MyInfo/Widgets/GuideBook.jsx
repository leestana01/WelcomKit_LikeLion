import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const GuideBookContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100px;
    background: linear-gradient(150deg, #A44600, #FF7710, #A44600);
    gap: 5px;

    
    border-bottom : 2px solid #A44600;
    cursor: pointer;
`

const ButtonText = styled.p`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`

export default function Component(){
    const navigate = useNavigate();
    return (
        <GuideBookContainer onClick={() => navigate("/main/info/guidebook")}>
            <ButtonText> 아기사자로 </ButtonText>
            <ButtonText> 살아남기 </ButtonText>
        </GuideBookContainer>
    )
}