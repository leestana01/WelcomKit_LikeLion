import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import Basic from '../../../Components//Buttons/Basic';
import RoadMapContainer from './RoadMapContainer';
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

const TitleColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

const BigColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Line = styled.div`
    background-color: #0A141B;
    width: 90%;
    height: 1px;
`;

const BigRow = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
`;

const CategoryColumn = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

const Tap = styled.button`
background-color: transparent;
border: none;
display: flex;
align-items: center;
justify-content: center;
cursor: ${props => props.$cursor ? "pointer" : null};
&:hover {
    background-image: linear-gradient(to right, #8F6E2E, transparent);
}
color: #CABB8F;
font-size: 30px;
font-family: 'LINE-Bd';

width: 100%;
height: 90px;
`;

export default function Component() {

    const [isWho, setIsWho] = useState(1);


    return (
        <ContainerBackground>
            <PageContainer>
                <BigColumn>
                    <TitleColumn>
                        <GradientText>트랙별 로드맵을 소개합니다.</GradientText>
                        <Line />
                    </TitleColumn>
                    <BigRow>
                        <CategoryColumn>
                            <Tap onClick={() => setIsWho(1)} cursor="pointer">프론트엔드</Tap>
                            <Tap onClick={() => setIsWho(2)} cursor="pointer">백엔드</Tap>
                            <Tap onClick={() => setIsWho(3)} cursor="pointer">기획/디자인</Tap>

                        </CategoryColumn>
                        <RoadMapContainer isWho={isWho} /> {/* 상태를 props로 전달할 수 있음!! */}
                    </BigRow>
                </BigColumn>
            </PageContainer>
        </ContainerBackground>
    )
}