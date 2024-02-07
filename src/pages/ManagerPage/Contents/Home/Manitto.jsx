import styled from 'styled-components';
import ContainerCard from '../../Components/ContainerCard';
import ContainerRow from '../../../../Components/Container/ContainerRow';
import ContainerColumn from '../../../../Components/Container/ContainerColumn';
import startManito from '../../../../APIs/post/manito/startManito';
import stopManito from '../../../../APIs/post/manito/stopManito';
import resetManito from '../../../../APIs/post/manito/resetManito';

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

    const handleButtonClick = async (input) => {
        if (!window.confirm("예기치 못한 결과를 일으킬 수 있습니다. 정말 진행하시겠습니까?")) {
            return;
        }
        
        if (window.prompt("'실행합니다'를 입력해주세요") === '실행합니다'){
            try{
                // alert('아직 지원하지 않는 기능입니다.');
                switch(input){
                    case 'start':
                        await startManito();
                        break;
                    case 'stop':
                        await stopManito();
                        break;
                    case 'reset':
                        await resetManito();
                        break;
                    default:
                        alert('오류가 발생했습니다. 관리자에게 문의 바랍니다.')
                        return;
                }
                alert('성공적으로 기능이 수행되었습니다.')
            } catch(error) {
                alert('오류가 발생했습니다. 서버 메시지 : ',error)
            }
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
                <ManittoButton onClick={() => {handleButtonClick('start')}}>시작</ManittoButton>
                [회장 전용] 마니또를 시작합니다. 한 번 시작하면 중지(발표)전까지 아무도 마니또를 알 수 없습니다.
            </ButtonContainer>

            <ButtonContainer>
                <ManittoButton onClick={() => {handleButtonClick('stop')}}>중지(발표)</ManittoButton>
                [회장 전용] 마니또를 발표합니다. 모든 유저에게 마니또 정보가 공개됩니다.
            </ButtonContainer>

            <ButtonContainer>
                <ManittoButton onClick={() => {handleButtonClick('reset')}}>하드리셋</ManittoButton>
                [관리자 전용] 모든 마니또 정보를 초기화하고, 시작 전 상태로 되돌립니다. 에러 조치를 위한 도구입니다.
            </ButtonContainer>

        </ManittoContainer>
    </ContainerCard>
    )
}