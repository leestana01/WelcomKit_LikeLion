import styled from 'styled-components';
import ContainerCard from '../../Components/ContainerCard';


const StyledCard = styled(ContainerCard)`
    cursor: pointer;
    background: darkred;
    font-family: LINE-Bd;
    color: white;
    &:hover {
        background: lightgray;
    }
`

export default function DangerButton() {

    const handleButtonClick = () => {
        if (!window.confirm("예기치 못한 결과를 일으킬 수 있습니다. 정말 진행하시겠습니까?")) {
            return;
        }
        if (window.prompt("'생성합니다'를 입력해주세요") === '생섭합니다'){
            alert('아직 지원하지 않는 기능입니다.');
        } else {
            alert('문자열이 일치하지 않아 취소되었습니다.');
        }
    };

    return (
        <StyledCard onClick={() => {handleButtonClick()}}>[관리자 전용] [위험! - 돌이킬 수 없음] 테스트 유저 100만개 생성</StyledCard>
    );
};
