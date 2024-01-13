import styled, {keyframes} from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const appear = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const BarLR = styled.div`
  position: absolute;
  background-image: url('/img/welcomekit/barLR.png');
  background-size: cover;
  height: calc(100vh - 143px);
  width: calc(100% - 100px);
  opacity: 0;
//   transform: translate(-50%, -50%);
  animation: ${appear} 0.4s ease forwards;
`;

const FillWidthContainer = styled.div`
  position: absolute;
  top: ${props => props.$top};
  bottom: ${props => props.$bottom};

  display: flex;
  flex-direction: row;
  justify-content: center;
  width: calc(100% - 100px);
`

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  opacity: 0;
  animation: ${appear} 1s ease forwards;
  animation-delay: 0.2s;
`
const LetterImage = styled.img`
  width: 200px;
`
const LetterDescription = styled.h1`
  font-family: LINE-Bd;
  font-size: 2rem;
  color: orange;
`
const LetterDescription2 = styled.p`
  font-size: 1.5rem;
  color: white;
`

const BarBottom = styled.img`
  height: 70px;

  opacity: 0;
  animation: ${appear} 1s ease forwards;
  animation-delay: 0.2s;
`;

const ButtonDown = styled.button`
  width: 200px;
  height: 50px;
  opacity: 0;

  color: white;
  font-family: LINE-Bd;
  font-size: 1.2rem;

  border: none;
  cursor: pointer;
  position: absolute;
  
  background: none;
  background-image: url('/img/welcomekit/buttonDown.png');
  background-size: cover;

  animation: ${appear} 1s ease forwards;
  animation-delay: 2s;

  &:hover {
    background-image: url('/img/welcomekit/buttonOn.png');
  }
`;

export default function Component() {
  useEffect(() => 
    {playSound();}, []
  );
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/main/welcomekit');
  };

  const playSound = () => {
    const audio = new Audio('/audio/boxopen.mp3');
    audio.play();
  };

    return (
        <ContainerBackground>
          <BarLR />
          
          <FillWidthContainer $top="30%">
            <LetterContainer>
              <LetterImage src="/img/letter.png"/>
              <LetterDescription>운영진의 편지</LetterDescription>
              <LetterDescription2>여러분들을 맞이하여 운영진분들이 뜻깊은 메시지를 남겨두었어요!</LetterDescription2>
            </LetterContainer>
          </FillWidthContainer>
          
          <FillWidthContainer $bottom="100px">
              <BarBottom src="/img/welcomekit/barBottom.png"/>
          </FillWidthContainer>

          <FillWidthContainer $bottom="120px">
              <ButtonDown onClick={() => handleOnClick()}>열어보기</ButtonDown>
          </FillWidthContainer>
        </ContainerBackground>
    )
}