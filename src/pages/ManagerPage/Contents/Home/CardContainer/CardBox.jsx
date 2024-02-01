import React from 'react';
import styled from 'styled-components';
import HomeCard from './CardForm';
import { FaUsers, FaServer, FaImages, FaPaintBrush } from 'react-icons/fa';
import { GiLion } from "react-icons/gi";
import ContainerRow from '../../../../../Components/Container/ContainerRow';

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
  return (
    <ContainerBetween>
        <RowContainer>
            <HomeCard $number="5명" $title="운영진" $color="#1d62f0" $managable="true">
                <FaUsers size={50} color={"#1d62f0"}/>
            </HomeCard>

            <HomeCard $number="10명" $title="아기사자" $color="#ff7b00" $managable="true">
            <GiLion size={50} color={"#ff7b00"}/>
            </HomeCard>
        </RowContainer>

        <RowContainer>
            <HomeCard $number="10명" $title="백엔드 인원 수" $color="gray">
                <FaServer size={50} color={"gray"}/>
            </HomeCard>
            <HomeCard $number="10명" $title="프론트 인원 수" $color="gray">
                <FaImages size={50} color={"gray"}/>
            </HomeCard>
            <HomeCard $number="10명" $title="기/디 인원 수" $color="gray">
                <FaPaintBrush size={50} color={"gray"}/>
            </HomeCard>
        </RowContainer>

    </ContainerBetween>
  );
};
