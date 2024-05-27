import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import Basic from '../../../Components/Buttons/Basic';
import { useEffect, useState } from 'react';
import ContainerRow from '../../../Components/Container/ContainerRow';
import getIsManitoActive from '../../../APIs/get/manito/getIsManitoActive';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import getMyManito from '../../../APIs/get/getMyManito';
import LetterForm from './LetterForm';
import LetterList from './LetterList';
import MyLetters from './MyLetters';
import getAllUsers from '../../../APIs/get/getAllUsers';
import selectMyManito from '../../../APIs/post/manito/selectMyManito';
import ManittoModal from './ManittoModal';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  width: 100%;
`
// 마니또 선택 기능 추가를 위한 div
const PageUpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

const PageContainer = styled(ContainerCenter)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`

const ChooseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  padding-top: 2rem;
  width: 300px;
  gap: 10px;
`

const LetterButtonBox = styled(ContainerRow)`
  gap: 2rem;
`

const LetterContainer = styled(ContainerColumn)`
  height: 30vh;
  margin: 2rem 0;
`

const LetterSendContainer = styled(ContainerRow)`
  height: 100%;
  gap: 2rem;
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
  cursor: pointer;
  &:hover {
    // background-image: linear-gradient(to top, #8F6E2E, transparent);
    background: #8F6E2E;
  }
`

const TextManito = styled.p`
  font-size: 1.2rem;
`

const TextManitoStatus = styled.p`
  color : ${props => props.$color};
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
`

const DescriptContainer = styled.div`
    width: 100%;
    margin-right: 40px;
    background-color: #010A13;
    border: 2px solid #372C16;
    padding: 10px;
`;

const ButtonForModal = styled(DescriptContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover{
    background: #8F6E2E;
  }
`

function ManittoMainFunction({selectedManito, setSelectedManito, isManitoActive}) {
  const [manitoTo, setManitoTo] = useState("");
  const [manitoFrom, setManitoFrom] = useState("");
  const [isGuessRight, setIsGuessRight] = useState(-2);
  const [view, setView] = useState("");

  useEffect(()=> {
    if (!isManitoActive){
      return;
    }
    const fetchMyManito = async () => {
      try{
        const response = await getMyManito();
        setManitoTo(response.manitoTo);
        setManitoFrom(response.manitoFrom);
        setSelectedManito(response.selectedManito);
        setIsGuessRight(response.isGuessRight);
      } catch {
        setManitoTo();
        setManitoFrom();
        setSelectedManito();
        setIsGuessRight(-2);
      }
    }
    fetchMyManito();
  },[isManitoActive])

  const guessResult = {
    "-2" : ["white", "로딩중..."],
    "-1" : ["white","정답 발표 대기중..."],
    "0" : ["tomato","틀렸습니다"],
    "1" : ["skyblue","정답입니다!"]
  }

  return (
    <PageContainer>
      {
          isManitoActive &&
          (
            <>
            <LetterButtonBox>
              <TextLetterHeader onClick={() => setView("writeLetter")}>내 맞니또에게 편지 쓰기</TextLetterHeader>
              <TextLetterHeader>|</TextLetterHeader>
              <TextLetterHeader onClick={() => setView("viewLetters")}>마니또가 보낸 편지 보기</TextLetterHeader>
            </LetterButtonBox>
            <LetterContainer>
              {view === "writeLetter" && <LetterSendContainer><LetterForm /><MyLetters /></LetterSendContainer>}
              {view === "viewLetters" && <LetterList />}
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
                <TextManito>당신의 맞니또는...</TextManito>
                <Basic text={manitoTo}/>
                {/* <Basic text={"숨겨짐"}/> */}
              </ManitoButtonBox>
              <ManitoButtonBox>
                <TextManito>내 마니또는...</TextManito>
                <Basic text={manitoFrom}/>
                {/* <Basic text={"숨겨짐"}/> */}
              </ManitoButtonBox>
              <ManitoButtonBox>
                <TextManito>내 마니또는 너야!</TextManito>
                <Basic text={selectedManito}/>
                {/* <Basic text={"숨겨짐"}/> */}
                {
                  selectedManito !== "선택 안됨" && (
                    <TextManitoStatus $color={guessResult[isGuessRight][0]}>{guessResult[isGuessRight][1]}</TextManitoStatus>
                  )
                }
              </ManitoButtonBox>
            </ManitoButtonContainer>
          ) :
          (
            <Basic text={"게임 시작 전..."}/>
          )
        }
      </PageContainer>
  )
}

function ChooseManitto({setSelectedManito, isManitoFinished, handleModalToggle}) {
  const [members, setMembers] = useState([]);
  
  useEffect(() => {
    // setMembers(['없음','개똥이','똥칠이','김철수','나짱구','1','2','3','4'])
    const getAllMembers = async () => {
      const response = await getAllUsers();
      setMembers(response);
    }
    getAllMembers();
  }, [])

  const handleSelectedManito = (member) => {
    const selectManito = async () => {
      try {
        const response = await selectMyManito(member);
        setSelectedManito(response);
      }
      catch {
        setSelectedManito("오류 발생");
      }
    }
    selectManito();
  }

  return (
    <ChooseContainer>
      <p> 내 마니또는..! </p>
      <ButtonContainer>
        {
          members.map( member => (
            <Basic 
              text={member} 
              key={member} 
              $cursor={!isManitoFinished} 
              $onClick={isManitoFinished ? null : () => {
                handleSelectedManito(member);
              }} />
          ))
        }
      </ButtonContainer>
      {
        isManitoFinished && (
          <ButtonForModal onClick={handleModalToggle}>
            <p>마니또가 종료되었습니다.</p>
            <p>결과를 보려면 여기를 클릭!</p>
          </ButtonForModal>
        )
      }
    </ChooseContainer>
  )
}

export default function Component() {
  const [selectedManito, setSelectedManito] = useState("-");
  const [isManitoActive, setIsManitoActive] = useState(false);
  const [isManitoFinished, setIsManitoFinished] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchManitoActive = async () => {
      const response = await getIsManitoActive();
      setIsManitoActive(response.manitoActive);
      setIsManitoFinished(response.manitoFinished);
      // setIsManitoFinished(true);
    };
    fetchManitoActive();
  }, []);

  const handleModalToggle = () => setShowModal(!showModal);

  return (
    <ContainerBackground $imgSrc={"/img/manito_background.png"}>
      <PageUpperContainer >
        <ManittoMainFunction 
          selectedManito={selectedManito} 
          setSelectedManito={setSelectedManito}
          isManitoActive={isManitoActive}
          />
        <ChooseManitto 
          setSelectedManito={setSelectedManito}
          isManitoFinished={isManitoFinished}
          handleModalToggle={handleModalToggle} />
      </PageUpperContainer>
      {showModal && <ManittoModal onClose={handleModalToggle} />}
    </ContainerBackground>
  );
};
