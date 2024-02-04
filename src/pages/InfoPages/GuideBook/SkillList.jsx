import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import StyledImg from '../../../Components/Container/CustomImg';
import React, { useState } from 'react';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  width: 100%;
`

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
gap: 40px;
`;

const Item = styled.h1`
font-size: 20px;
font-family: 'LINE-Bd';
color: #3B454E;
text-align: left;
`;

export default function Component({ setIsWhat }) {

    return (
        <CustomColumn>
            <Item>각 스킬을 클릭하여 중요도를 확인하세요.</Item>
            <CustomRow>
                <SkillContainer onClick={() => setIsWhat(1)}>
                    <ImageContainer>
                        <StyledImg src={'/img/icon_github_black.png'} width='200px' height='200px' />
                    </ImageContainer>
                    <Skill>
                        Github
                    </Skill>
                </SkillContainer>

                <SkillContainer onClick={() => setIsWhat(2)}>
                    <ImageContainer>
                        <StyledImg src={'/img/icon_slack.png'} width='200px' height='200px' />
                    </ImageContainer>
                    <Skill>
                        Slack
                    </Skill>
                </SkillContainer>

                <SkillContainer onClick={() => setIsWhat(3)}>
                    <ImageContainer>
                        <StyledImg src={'/img/notion.png'} width='200px' height='200px' />
                    </ImageContainer>
                    <Skill>
                        Notion
                    </Skill>
                </SkillContainer>

                <SkillContainer onClick={() => setIsWhat(4)}>
                    <ImageContainer>
                        <StyledImg src={'/img/gather.png'} width='200px' height='200px' />
                    </ImageContainer>
                    <Skill>
                        Gather
                    </Skill>
                </SkillContainer>

                <SkillContainer onClick={() => setIsWhat(5)}>
                    <ImageContainer>
                        <StyledImg src={'/img/icon_discord.png'} width='200px' height='200px' />
                    </ImageContainer>
                    <Skill>
                        Discord
                    </Skill>
                </SkillContainer>
            </CustomRow>
        </CustomColumn>
    )
}