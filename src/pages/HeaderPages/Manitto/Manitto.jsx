import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import ContainerColumn from '../../../Components/Container/ContainerColumn';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  width: 100%;
`

const GameInfoContainer = styled(ContainerCenter)`
  background: white;
  color: black;
  width: auto;
  padding: 10px;
  border: 3px solid orange;
`

const PageContainer = styled(ContainerCenter)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`

const TextH1 = styled.h1`
  font-family: 'LINE-Bd', sans-serif;
  font-size: 40px;
  color: orange;
`

const TextH2 = styled.h2`
  font-family: 'LINE-Bd', sans-serif;
  font-size: 30px;
`

const TextH3 = styled.h3`
  font-family: 'LINE-Bd', sans-serif;
  font-size: 25px;
  color: orange;
`

const StyledList = styled.ul`
  list-style-type: disc;
  line-height: 2em;
`

const ListItem = styled.li`
`

export default function Component() {
  
  return (
    <ContainerBackground>
      <PageContainer>
        
        <TextH1>마니또를 찾아라!</TextH1>

        <ContainerCenter>
          <TextH2>마니또 게임에 오신 것을 환영합니다!</TextH2>
          <p>이번 동아리 활동 동안 우리는 서로에게 익명으로 도움을 주고받으며 즐거운 시간을 보낼 예정입니다.</p>
          <p>마니또 게임을 통해 동아리원들과의 유대를 더욱 깊게 하고, 익명의 친구에게 따뜻한 마음을 전달해보세요.</p>
        </ContainerCenter>

        <GameInfoContainer>
          <TextH2>게임 정보</TextH2>
          <p>동아리 회장이 '시작' 버튼을 누르면 바로 랜덤 배정됩니다.</p>
          <TextH3>나는 누구의 마니또일까?</TextH3>
          <TextH3>{"<<"}시작 대기 중{">>"}</TextH3>
        </GameInfoContainer>

        <ContainerCenter>
          <TextH2>게임 규칙</TextH2>
          <ContainerColumn>
            <StyledList>
              <ListItem>마니또와 맞니또는 랜덤으로 배정됩니다.</ListItem>
              <ListItem>정체는 끝까지 비밀로 유지해주세요.</ListItem>
              <ListItem>선물은 최대 X원까지만 가능합니다.</ListItem>
            </StyledList>
          </ContainerColumn>
        </ContainerCenter>

      </PageContainer>
    </ContainerBackground>
  );
};
