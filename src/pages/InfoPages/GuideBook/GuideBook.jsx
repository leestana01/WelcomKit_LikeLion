import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import StyledImg from '../../../Components/Container/CustomImg';
import React, { useState } from 'react';
import SkillInfo from './SkillInfo';
import SkillList from './SkillList';
import LionSpace from './LionSpace';
import LionMind from './LionMind';

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

const GradientText = styled.h1`
    font-size: 50px;
    font-family: 'LINE-Bd';
    background: linear-gradient(to bottom, #C8A96C, #7B5D28);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2; /* 라인 높이 조정 */
    padding-top: 2px; /* 위쪽에 약간의 패딩 추가 */
    display: inline-block; /* display 속성 조정 */
`;

const Line = styled.div`
    background-color: #0A141B;
    width: 90%;
    height: 1px;
`;

const CustomRow = styled.div`
display: flex;
flex-direction: row;
gap: 40px;
`;

const CustomColumn = styled.div`
display: flex;
flex-direction: column;
gap: 80px;
`;

const MiniColumn = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
`;

const CustomCenter = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const Top = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 40vh; // 화면 높이의 1/3
gap: 40px;
`

const ContentContainer = styled.div`
  height: 60vh; // 화면 높이의 2/3
`;

const Item = styled.h1`
font-size: 30px;
font-family: 'LINE-Bd';
color: #3B454E;
text-align: left;
`;

const Prepare = styled.h1`
font-size: 20px;
font-family: 'LINE-Bd';
color: #3B454E;
text-align: center;
`;

export default function Component() {

    //const [isWhat, setIsWhat] = useState(1);
    const [isWhat, setIsWhat] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);

    const handleLionMindClick = () => setCurrentPage('LionMind');
    const handleSkillClick = () => setCurrentPage('Skills');
    const handleLionSpaceClick = () => setCurrentPage('LionSpace');

    return (
        <ContainerBackground>
            <PageContainer>
                <Top>
                    <GradientText>아가사자의 협곡에 오신 것을 환영합니다.</GradientText>
                    <Line />
                    <CustomColumn>
                        <CustomCenter>
                            <MiniColumn>
                                <Prepare>[ 아래의 세가지 탭을 하나씩 클릭하여 멋쟁이 사자가 될 준비를 마치세요. ]</Prepare>
                                <CustomRow>
                                    <Item onClick={handleLionMindClick}>사자들의 행동 강령 보기</Item>
                                    <Item>|</Item>
                                    <Item onClick={handleSkillClick}>초원에서 생존하기 위한 스킬</Item>
                                    <Item>|</Item>
                                    <Item onClick={handleLionSpaceClick}>사자들의 서식지 확인하기</Item>
                                </CustomRow>
                            </MiniColumn>
                        </CustomCenter>
                    </CustomColumn>
                </Top>
                <ContentContainer>
                    <CustomColumn>
                        {currentPage === 'Skills' && <>
                            <SkillList setIsWhat={setIsWhat} />
                            <SkillInfo isWhat={isWhat} />
                        </>}
                        {currentPage === 'LionMind' && <LionMind />}
                        {currentPage === 'LionSpace' && <LionSpace />}
                    </CustomColumn>
                </ContentContainer>
            </PageContainer>
        </ContainerBackground >
    )
}