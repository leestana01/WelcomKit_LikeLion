import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import Basic from '../../../Components/Buttons/Basic';
import { useEffect, useState } from 'react';
import ContainerRow from '../../../Components/Container/ContainerRow';
import getIsManitoActive from '../../../APIs/get/getIsManitoActive';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import getMyManito from '../../../APIs/get/getMyManito';

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

const LetterButtonBox = styled(ContainerRow)`
  gap: 2rem;
`

const LetterContainer = styled(ContainerColumn)`
  height: 30vh;
`

const ManitoButtonBox = styled(ContainerColumn)`
  align-items: center;
  gap: 10px;
`

const ManitoButtonContainer = styled(ContainerRow)`
  gap: 10px;
`

const TextH1 = styled.h1`
  font-family: 'LINE-Bd', sans-serif;
  font-size: 80px;
  color: orange;
`

const TextH2 = styled.h2`
  font-family: 'LINE-Bd', sans-serif;
  font-size: 30px;
`

const TextLetterHeader = styled.h2`
  color: lightgray;
  font-family: 'LINE-Bd', sans-serif;
  font-size: 30px;
`

const TextManito = styled.p`
  font-size: 1.2rem;
`

export default function Component() {
  const [isManitoActive, setIsManitoActive] = useState(false);
  const [manitoTo, setManitoTo] = useState("");
  const [manitoFrom, setManitoFrom] = useState("");

  useEffect(()=> {
    const fetchManitoActive = async () => {
      const response = await getIsManitoActive();
      if (response === true){
        setIsManitoActive(true);
        return;
      }
      setIsManitoActive(false);
    }
    fetchManitoActive();
  },[]);

  useEffect(()=> {
    if (!isManitoActive){
      return;
    }
    const fetchMyManito = async () => {
      try{
        const response = await getMyManito();
        setManitoTo(response.manitoTo);
        setManitoFrom(response.manitoFrom);
      } catch {
        setManitoTo();
        setManitoFrom();
      }
    }
    fetchMyManito();
  },[isManitoActive])

  // 임시 데이터
  const Letters = [
    {
      "message": "안녕하세요 테스트님! 테스트님의 열정에 감탄했습니다. 앞으로 멋사에서 테스트님이 발휘하실 테스트 정신, 많이 기대하겠습니다!",
    },
    {
      "message": "예시 메시지입니다!",
    },
    {
      "message": "예시 메시지 2 입니다!!!!!!!!!!!!!!!!!!!",
    }
    
  ]
  
  return (
    <ContainerBackground $imgSrc={"/img/manito_background.png"}>
      <PageContainer>
        {
          isManitoActive &&
          (
            <>
            <LetterButtonBox>
              <TextLetterHeader>내 마니또에게 편지 쓰기</TextLetterHeader>
              <TextLetterHeader>|</TextLetterHeader>
              <TextLetterHeader>맞니또가 보낸 편지 보기</TextLetterHeader>
            </LetterButtonBox>
            <LetterContainer>
              {/* 여기에 편지쓰기 Form 또는 편지 리스트를 보여야 함 */}
            </LetterContainer>
            </>
          )
        }
        
        <TextH1>마니또를 찾아라!</TextH1>

        <ContainerCenter>
          <TextH2>마니또 게임에 오신 것을 환영합니다!</TextH2>
        </ContainerCenter>
        {
          isManitoActive ?
          (
            <ManitoButtonContainer>
              <ManitoButtonBox>
                <TextManito>당신의 마니또는...</TextManito>
                <Basic text={manitoTo}/>
              </ManitoButtonBox>
              <ManitoButtonBox>
                <TextManito>내 맞니또는...</TextManito>
                <Basic text="?"/>
              </ManitoButtonBox>
            </ManitoButtonContainer>
          ) :
          (
            <Basic text={manitoFrom}/>
          )
        }
      </PageContainer>
    </ContainerBackground>
  );
};
