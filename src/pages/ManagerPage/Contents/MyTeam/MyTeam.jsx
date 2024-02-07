import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContainerColumn from '../../../../Components/Container/ContainerColumn';
import getMyTeammatesForManager from '../../../../APIs/get/getMyTeammatesForManager';
import updateTeamLeader from '../../../../APIs/post/updateTeamLeader';
import partType from '../../../../partType';

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
  background-color: green;
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
    const fetchTeammates = async () => {
      const response = await getMyTeammatesForManager();
      setUsers(response);
    }
    fetchTeammates();
  }, [])

  const handleUpdateTeamLeader = async (managerId) => {
    await updateTeamLeader(managerId);
    alert('팀장 설정에 성공했습니다.');
    window.location.reload();
  };

  return (
    <UserListContainer>
      <UserTable>
        <thead>
          <UserRow>
            <TableHeader>이름</TableHeader>
            <TableHeader>팀</TableHeader>
            <TableHeader>파트</TableHeader>
            <TableHeader>운영진 여부</TableHeader>
            <TableHeader>팀장 여부</TableHeader>
            <TableHeader>팀장 설정</TableHeader>
          </UserRow>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id}>
                <UserCell>{user.name}</UserCell>
                <UserCell>{user.teamId === 0 ? '편성 전' : user.team}</UserCell>
                <UserCell>{partType[user.part]}</UserCell>
                <UserCell>
                    <TextWritten $color={user.userType !== 'ROLE_USER' ? 'red' : 'blue'}>
                        {user.userType !== 'ROLE_USER' ? '운영진' : '아기사자'}
                    </TextWritten>
                </UserCell>
                <UserCell>
                    <TextWritten $color={user.teamLeader ? 'red' : 'blue'}>
                        {user.teamLeader ? '팀장' : '팀원'}
                    </TextWritten>
                </UserCell>
                <UserCell>
                  {user.userType !== 'ROLE_USER' && (
                    <Button onClick={() => handleUpdateTeamLeader(user.id)}> 팀장 지정 </Button>
                  )}
              </UserCell>
            </UserRow>
          ))}
        </tbody>
      </UserTable>
    </UserListContainer>
  );
};
