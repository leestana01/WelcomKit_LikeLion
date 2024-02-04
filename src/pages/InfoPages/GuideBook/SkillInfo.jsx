import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import StyledImg from '../../../Components/Container/CustomImg';
import React, { useState } from 'react';

const InfoContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: #010A13;
    border: 2px solid #372C16;
    padding: 30px;
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

const Line = styled.div`
    background-color: #0A141B;
    width: 90%;
    height: 1px;
`;

const Skill = styled.h1`
font-size: 20px;
font-family: 'LINE-Bd';
color: #C8A55C;
`;

const Detail = styled.a`
font-size: 15px;
font-family: 'LINE-Bd';
font-weight: bold;
color: #C8A55C;
line-height: 18px;
`;

const Star = styled.div`
  display: inline-block;
  width: 50px; 
  height: 50px; 
  background-color: gold; 
  clip-path: polygon(
    50% 0%, 
    61% 35%, 
    98% 35%, 
    68% 57%, 
    79% 91%, 
    50% 70%, 
    21% 91%, 
    32% 57%, 
    2% 35%, 
    39% 35%
  );
`;

export default function Component({ isWhat }) {

    return (
        <>

            {isWhat === 1 && (<InfoContainer>
                <CustomColumn>
                    <CustomRow>
                        <Skill>중요도:</Skill>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </CustomRow>
                    <Detail>멋사 세션 실습과 과제 수행이 모두 이루어지는, 개발자라면 누구나 사용할 플랫폼이에요.<br />
                        '레포지토리(repository)'의 개념을 이해한 후, 내가 작성한 코드를 업로드하는 방법을 배워요.<br />
                        이후 더 나아가 여러 명이 함께 코드를 작성할 때, 깃허브를 다루는 방법을 배울 수 있어요.</Detail>
                </CustomColumn>

            </InfoContainer>)}

            {isWhat === 2 && (<InfoContainer>
                <CustomColumn>
                    <CustomRow>
                        <Skill>중요도:</Skill>
                        <Star />
                        <Star />
                    </CustomRow>
                    <Detail>멋사 전체 채널에 초대되어 다양한 소식을 받아볼 수 있어요.</Detail>
                </CustomColumn>

            </InfoContainer>)}

            {isWhat === 3 && (<InfoContainer>
                <CustomColumn>
                    <CustomRow>
                        <Skill>중요도:</Skill>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </CustomRow>
                    <Detail>프로젝트 회의록을 작성하고, 과제를 제출하는 등 여러가지 중요한 소식을 공유하는 곳이에요.</Detail>
                </CustomColumn>

            </InfoContainer>)}

            {isWhat === 4 && (<InfoContainer>
                <CustomColumn>
                    <CustomRow>
                        <Skill>중요도:</Skill>
                        <Star />
                        <Star />
                        <Star />
                    </CustomRow>
                    <Detail>팀원들과 회의를 하거나, 온라인 세션을 진향하는 가상 공간(메타 플랫폼)이에요.</Detail>
                </CustomColumn>

            </InfoContainer>)}

            {isWhat === 5 && (<InfoContainer>
                <CustomColumn>
                    <CustomRow>
                        <Skill>중요도:</Skill>
                        <Star />
                        <Star />
                    </CustomRow>
                    <Detail>멋사 전체 공지와 소통이 이루어지는 곳이에요.</Detail>
                </CustomColumn>

            </InfoContainer>)}
        </>
    )
}