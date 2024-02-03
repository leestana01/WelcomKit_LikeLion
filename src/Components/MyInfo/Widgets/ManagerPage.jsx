import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ManagerPageContainer = styled.div`
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100px;
    background: lightgray;
    gap: 5px;

    font-family: LINE-Bd;
    color: black;
    border-bottom : 2px solid #1C4117;
    cursor: pointer;
`
const ButtonText = styled.p`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`

export default function ManagerPage(){
    const navigate = useNavigate();
    return (
        <ManagerPageContainer onClick={() => navigate("/managerpage")}>
            <p> 운영진 전용 </p>
            <ButtonText> 관리 페이지 </ButtonText>
        </ManagerPageContainer>
    )
}