import React from 'react';
import styled from 'styled-components';
import CardBox from './CardContainer/CardBox';
import ContainerColumn from '../../../../Components/Container/ContainerColumn';
import NoticeBlue from '../../Components/NoticeBlue';
import Manitto from './Manitto';
import DangerButton from './DangerButton';
import CreateUser from './CreateUser';

const ContentContainer = styled(ContainerColumn)`
  gap: 20px;
`;

export default function ManagerHome() {
  return (
    <ContentContainer>
      <CardBox/>
      <NoticeBlue>
        권한이 없는 기능은 해당 버튼을 클릭해도 작동하지 않습니다. [회장 전용]등 기능 앞의 특수 권한을 확인하세요
      </NoticeBlue>
      <Manitto/>

      <CreateUser/>

      <DangerButton/>
    </ContentContainer>
  );
};
