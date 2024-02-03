import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  width: 100%;
`

const PageContainer = styled(ContainerCenter)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
`

export default function MyPage(){

    return (
        <ContainerBackground>
            <PageContainer>
                <h1 style={{"fontSize":"3rem", "fontFamily":"LINE-Bd"}}>
                    여기에 소개 메시지 꾸미기
                </h1>
            </PageContainer>
        </ContainerBackground>
    )
}