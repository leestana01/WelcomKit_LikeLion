import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
`;

const SidebarMenu = styled.div`
  color: white;
  padding: 10px;
`;

const SidebarItem = styled.a`
  display: block;
  padding: 10px;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: LINE-Bd;
  font-size: 1.5rem;

  height: 64px;
  margin: 16px;
  color: white;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: white;
`

export default function Sidebar(){
  const navigate = useNavigate();
  return (
    <SidebarContainer>
    <Logo>
      웰컴키트 종합 관리
    </Logo>
    <Line />
    <SidebarMenu>
      <SidebarItem onClick={() => {navigate("/managerpage/")}}>메인페이지</SidebarItem>
      <SidebarItem onClick={() => {navigate("/managerpage/info")}}>내 정보 수정</SidebarItem>
      <SidebarItem onClick={() => {navigate("/managerpage/letters")}}>편지 작성하기</SidebarItem>
      <SidebarItem onClick={() => {navigate("/managerpage/team")}}>내 팀 관리</SidebarItem>
    </SidebarMenu>
  </SidebarContainer>
  )
}
