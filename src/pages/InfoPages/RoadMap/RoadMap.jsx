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
gap: 150px;
`

const Line = styled.div`
background-color: #0A141B;
width: 90%;
height: 1px;
`;

const BigRow = styled.div`
flex: 2;
height: 100%;
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
gap: 40px;
`

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
                            <Basic text='프론트엔드' $onClick={() => setIsWho(1)} />
                            <Basic text='백엔드' $onClick={() => setIsWho(2)} />
                            <Basic text='기획 & 디자인' $onClick={() => setIsWho(3)} />

                        </CategoryColumn>
                        <RoadMapContainer isWho={isWho} /> {/* 상태를 props로 전달할 수 있음!! */}
                    </BigRow>
                </BigColumn>
            </PageContainer>
        </ContainerBackground>
    )
}