import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import Basic from '../../../Components/Buttons/Basic';
import BingoExplain from './BingoExplain';
import React, { useState } from 'react';

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
    overflow: auto;

    &::-webkit-scrollbar {
        width: 10px;
        border-radius: 20px;
        margin: 5px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 20px;
        margin: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #C8A96C, #7B5D28);
        border-radius: 20px;
        margin: 5px;
    }
`

const GradientText = styled.h1`
    font-size: 50px;
    font-family: 'LINE-Bd';
    background: linear-gradient(to bottom, #C8A96C, #7B5D28);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
    padding-top: 2px;
    display: inline-block;
`;

const Line = styled.div`
    background-color: #0A141B;
    width: 90%;
    height: 1px;
`;

const CustomRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 40px;
`;

const CustomColumn = styled.div`
display: flex;
flex-direction: column;
gap: 80px;
`;

const Text = styled.a`
font-size: 25px;
line-height: 30px; /* 라인 높이 조정 */
padding-top: 2px; /* 위쪽에 약간의 패딩 추가 */
display: inline-block; /* display 속성 조정 */
color: white;
`;

const Detail = styled.a`
font-size: 25px;
margin: 5px;
color: orange;
font-family: LINE-Bd;
`;

const CustomCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export default function Component() {

    const handleClick = () => {
        window.open("https://github.com/hufslion10th/bingo", "_blank");
    };

    const [showExplain, setShowExplain] = useState(false);

    const handleExplainClick = () => {
        setShowExplain(true);
    };

    return (
        <ContainerBackground>
            <PageContainer>
                <GradientText>아기사자를 위한 빙고</GradientText>
                <Line />
                <CustomColumn>

                    <Text>
                        1. 빙고판을 <Detail>다운로드</Detail> 받는다.<br />
                        2. <Detail>미션 수행 레포지토리</Detail>에 자기 이름으로 된
                        <Detail>issue</Detail>를 생성한다.<br />
                        3. 미션을 수행할 때마다 <Detail>수행 내역과 현재 빙고 이미지</Detail>를 올린다.<br />
                        4. 운영진을 <Detail>태그</Detail>한다.<br />
                        5. 미션을 다 수행한 아기사자가 되어 <Detail>운영진의 선물</Detail>을 받는다.<br />
                    </Text>

                    <CustomRow>
                        <Basic text='빙고판으로 이동' $onClick={() => handleClick()} />
                        <Basic text='자세한 설명 보기' $onClick={() => handleExplainClick()} />
                    </CustomRow>
                </CustomColumn>
                <CustomCenter>
                    {showExplain && <BingoExplain />}
                </CustomCenter>
            </PageContainer>
        </ContainerBackground >
    )
}