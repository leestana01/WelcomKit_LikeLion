import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContainerColumn from '../../../../Components/Container/ContainerColumn';

const UserListContainer = styled(ContainerColumn)`
  align-items: end;
  padding: 20px;
  gap: 20px;
`;

const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const UserRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const UserCell = styled.td`
  padding: 10px;
  text-align: left;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f8f8f8;
`;

const Button = styled.button`
  width: fit-content;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.$background || '#007bff'};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const TextWritten = styled.p`
  color: ${props => props.$color};
`

export default function MyTeam() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    setUsers([
      { id: 1, detail: '임승민', team: '1', part:'DESIGN', isManager:false, isLeader: false },
      { id: 2, detail: '이수혁', team: '1', part:'BACK', isManager:true, isLeader: true },
      { id: 3, detail: '이나영', team: '1', part:'FRONT', isManager:true, isLeader: false },
      { id: 4, detail: '김재우', team: '1', part:'FRONT', isManager:false, isLeader: false },
      { id: 5, detail: '정재웅', team: '1', part:'BACK', isManager:false, isLeader: false },
    ]);
  }, [])

  return (
    <UserListContainer>
      <UserTable>
        <thead>
          <UserRow>
            <TableHeader>상세 정보</TableHeader>
            <TableHeader>팀</TableHeader>
            <TableHeader>파트</TableHeader>
            <TableHeader>운영진 여부</TableHeader>
            <TableHeader>팀장 여부</TableHeader>
          </UserRow>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id}>
                <UserCell>{user.detail}</UserCell>
                <UserCell>{user.team === 0 ? '편성 전' : user.team}</UserCell>
                <UserCell>
                    {user.part === 'FRONT' ? '프론트엔드' :
                    user.part === 'BACK' ? '백엔드' :
                    user.part === 'DESIGN' ? '기획/디자인' : user.part}
                </UserCell>
                <UserCell>
                    <TextWritten $color={user.isManager ? 'red' : 'blue'}>
                        {user.isManager ? '운영진' : '아기사자'}
                    </TextWritten>
                </UserCell>
                <UserCell>
                    <TextWritten $color={user.isLeader ? 'red' : 'blue'}>
                        {user.isLeader ? '팀장' : '팀원'}
                    </TextWritten>
                </UserCell>
            </UserRow>
          ))}
        </tbody>
      </UserTable>
      <Button>나를 팀장으로 <br/>(바꾸려면 해당 사람이 직접 버튼 클릭해야함)</Button>
    </UserListContainer>
  );
};
