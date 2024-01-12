import ContainerBackground from '../../Components/Container/ContainerBackground';
import styled from 'styled-components';
import GridWidget from './GridWidget';
import SizedBoxColumn from '../../Components/SizedBox/SizedBoxColumn';

const LeftContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const RightContainer = styled.div`
  flex : 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const TextH1 = styled.h1`
  font-family: 'LINE-Bd', sans-serif;
  font-size: 40px;
`

const TextH2 = styled.h2`
  font-family: 'LINE-Bd', sans-serif;
  font-size: 30px;
`

export default function Component() {
  
  return (
    <ContainerBackground $imgSrc={"img/home.png"}>

      <LeftContainer>
        <TextH1>2024 아기사자</TextH1>
        <GridWidget/>
      </LeftContainer>

      <RightContainer>
        <TextH1>멋쟁이 사자처럼의</TextH1>
        <TextH1>부원이 되신 여러분!</TextH1>
        <SizedBoxColumn/>
        <TextH2>진심으로 환영하고, 축하드립니다!</TextH2>
      </RightContainer>

    </ContainerBackground>
  );
};
