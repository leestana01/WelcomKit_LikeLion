import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomeCard from './CardForm';
import { FaUsers, FaServer, FaImages, FaPaintBrush, FaDev } from 'react-icons/fa';
import { GiLion } from "react-icons/gi";
import ContainerRow from '../../../../../Components/Container/ContainerRow';
import getUserCountByPart from '../../../../../APIs/get/getUserCountByPart';

const ContainerBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const RowContainer = styled(ContainerRow)`
    gap: 2rem;
`

export default function CardBox() {
    const [userCount, setUserCount] = useState({});

    useEffect(()=> {
        const fetchUserCount = async () => {
            const response = await getUserCountByPart();
            setUserCount(response);
        }
        fetchUserCount();
    },[])
    return (
        <ContainerBetween>
            <RowContainer>
                <HomeCard $number={`${userCount.managers}명`} $title="운영진" $color="#1d62f0" $managable={"/managerpage/handle-managers"}>
                    <FaUsers size={50} color={"#1d62f0"}/>
                </HomeCard>

                <HomeCard $number={`${userCount.babyLions}명`} $title="아기사자" $color="#ff7b00">
                <GiLion size={50} color={"#ff7b00"}/>
                </HomeCard>
            </RowContainer>

            <RowContainer>
                <HomeCard $number={`${userCount.back}명`} $title="백엔드 인원 수" $color="gray">
                    <FaServer size={50} color={"gray"}/>
                </HomeCard>
                <HomeCard $number={`${userCount.front}명`} $title="프론트 인원 수" $color="gray">
                    <FaImages size={50} color={"gray"}/>
                </HomeCard>
                <HomeCard $number={`${userCount.design}명`} $title="기/디 인원 수" $color="gray">
                    <FaPaintBrush size={50} color={"gray"}/>
                </HomeCard>
                <HomeCard $number={`${userCount.dev}명`} $title="개발 인원 수" $color="gray">
                    <FaDev size={50} color={"gray"}/>
                </HomeCard>
            </RowContainer>

        </ContainerBetween>
    );
};
