import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import StyledImg from '../../../Components/Container/CustomImg';
import React, { useState } from 'react';
import SkillInfo from './SkillInfo';

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

const Skill = styled.h1`
font-size: 20px;
font-family: 'LINE-Bd';
color: #C8A55C;
text-align: center;
`;

const SkillContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #8F6E2E, transparent);
    z-index: 2; // 오버레이가 이미지 위에 오도록 z-index 설정
  }
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

const Item = styled.h1`
font-size: 30px;
font-family: 'LINE-Bd';
color: #3B454E;
text-align: left;
`;

export default function Component() {

    const [isWhat, setIsWhat] = useState(1);

    return (
        <ContainerBackground>
            <PageContainer>
                <GradientText>아가사자의 협곡에 오신 것을 환영합니다.</GradientText>
                <Line />
                <CustomColumn>
                    <Item>생존을 위해 필요한 스킬</Item>
                    <CustomRow>
                        <SkillContainer $onClick={() => setIsWhat(1)}>
                            <ImageContainer>
                                <StyledImg src={'/img/icon_github_black.png'} width='200px' height='200px' />
                            </ImageContainer>
                            <Skill>
                                Github
                            </Skill>
                        </SkillContainer>

                        <SkillContainer $onClick={() => setIsWhat(2)}>
                            <ImageContainer>
                                <StyledImg src={'/img/icon_slack.png'} width='200px' height='200px' />
                            </ImageContainer>
                            <Skill>
                                Slack
                            </Skill>
                        </SkillContainer>

                        <SkillContainer $onClick={() => setIsWhat(3)}>
                            <ImageContainer>
                                <StyledImg src={'/img/notion.png'} width='200px' height='200px' />
                            </ImageContainer>
                            <Skill>
                                Notion
                            </Skill>
                        </SkillContainer>

                        <SkillContainer $onClick={() => setIsWhat(4)}>
                            <ImageContainer>
                                <StyledImg src={'/img/gather.png'} width='200px' height='200px' />
                            </ImageContainer>
                            <Skill>
                                Gather
                            </Skill>
                        </SkillContainer>

                        <SkillContainer $onClick={() => setIsWhat(5)}>
                            <ImageContainer>
                                <StyledImg src={'/img/icon_discord.png'} width='200px' height='200px' />
                            </ImageContainer>
                            <Skill>
                                Discord
                            </Skill>
                        </SkillContainer>
                    </CustomRow>
                    <SkillInfo isWhat={isWhat} />
                </CustomColumn>
            </PageContainer>
        </ContainerBackground>
    )
}