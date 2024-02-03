import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  background-color: #f1f1f1;
`;

const OutletContainer = styled.div`
  padding: 20px;
  overflow-y: auto; // 세로 스크롤을 위한 설정
  height: calc(100% - 116px); // 부모 요소의 높이에 맞춤
`

export default function ManagerPage() {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </MainContent>
    </AppContainer>
  );
}
