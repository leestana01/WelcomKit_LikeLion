import styled from 'styled-components';
import ContainerCard from '../../Components/ContainerCard';
import ContainerRow from '../../../../Components/Container/ContainerRow';
import ContainerColumn from '../../../../Components/Container/ContainerColumn';

const TextTitle = styled.h1`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`

const ManittoContainer = styled(ContainerColumn)`
    gap: 10px;
`

const ButtonContainer = styled(ContainerRow)`
    justify-content: start;
    gap: 20px;
`
const ManittoButton = styled(ContainerCard)`
    width: 100px;
    cursor: pointer;
    &:hover {
        background: lightgray;
    }
`

export default function Manitto(){

    const handleButtonClick = () => {
        if (!window.confirm("예기치 못한 결과를 일으킬 수 있습니다. 정말 진행하시겠습니까?")) {
            return;
        }
        if (window.prompt("'실행합니다'를 입력해주세요") === '생섭합니다'){
            alert('아직 지원하지 않는 기능입니다.');
        } else {
            alert('문자열이 일치하지 않아 취소되었습니다.');
        }
    };

    return(
      <ContainerCard>
        <ManittoContainer>
            <TextTitle>마니또 진행 현황</TextTitle>
            <TextTitle>시작 전</TextTitle>

            <ButtonContainer>
                <ManittoButton onClick={() => {handleButtonClick()}}>시작</ManittoButton>
                [회장 전용] 마니또를 시작합니다. 한 번 시작하면 중지(발표)전까지 아무도 마니또를 알 수 없습니다.
            </ButtonContainer>

            <ButtonContainer>
                <ManittoButton onClick={() => {handleButtonClick()}}>중지(발표)</ManittoButton>
                [회장 전용] 마니또를 발표합니다. 모든 유저에게 마니또 정보가 공개됩니다.
            </ButtonContainer>

            <ButtonContainer>
                <ManittoButton onClick={() => {handleButtonClick()}}>하드리셋</ManittoButton>
                [관리자 전용] 모든 마니또 정보를 초기화하고, 시작 전 상태로 되돌립니다. 에러 조치를 위한 도구입니다.
            </ButtonContainer>

        </ManittoContainer>
    </ContainerCard>
    )
}