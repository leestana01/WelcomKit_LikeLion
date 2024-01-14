import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LetsBingoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100px;
    background: linear-gradient(150deg, #00457E, #007BE5, #00457E);
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
        <LetsBingoContainer onClick={() => navigate("/main/info/letsbingo")}>
            <p> 같이해요 </p>
            <ButtonText> 빙고 게임! </ButtonText>
        </LetsBingoContainer>
    )
}