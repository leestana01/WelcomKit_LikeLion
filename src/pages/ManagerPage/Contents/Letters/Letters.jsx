import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getBabyLions from '../../../../APIs/get/getBabyLions';
import createWelcomeLetter from '../../../../APIs/post/createWelcomeLetter';

const UserListContainer = styled.div`
  padding: 20px;
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

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  width: 300px;
  text-align: center;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: black;
  cursor: pointer;
`;

const TextInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextWritten = styled.p`
  color: ${props => props.$color};
`

export default function Letters() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState({ open: false, targetId: null });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBabyLions = async () => {
      const response = await getBabyLions();
      setUsers(response);
    }
    fetchBabyLions();
  }, [])

  const handleMessageSubmit = async () => {
    if (showModal.targetId) {
      await createWelcomeLetter(showModal.targetId, message);
      alert('해당 유저에게 메시지 작성을 완료하였습니다.');
      window.location.reload();
    }
  };

  return (
    <UserListContainer>
      <UserTable>
        <thead>
          <UserRow>
            <TableHeader>이름</TableHeader>
            <TableHeader>팀</TableHeader>
            <TableHeader>파트</TableHeader>
            <TableHeader>편지 작성 여부</TableHeader>
            <TableHeader>작업</TableHeader>
          </UserRow>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id}>
                <UserCell>{user.name}</UserCell>
                <UserCell>{user.teamId === 0 ? '편성 전' : user.teamId}</UserCell>
                <UserCell>
                    {user.part === 'FRONT' ? '프론트엔드' :
                    user.part === 'BACK' ? '백엔드' :
                    user.part === 'DESIGN' ? '기획/디자인' : user.part}
                </UserCell>
                <UserCell>
                    <TextWritten $color={user.messageWritten ? 'red' : 'blue'}>
                        {user.messageWritten ? '작성됨' : '미작성'}
                    </TextWritten>
                </UserCell>
                <UserCell>
                    <Button
                        $background={user.messageWritten ? "red" : null}
                        onClick={() => setShowModal({ open: true, targetId: user.id })}>
                            {user.messageWritten ? '수정하기' : '작성하기'}
                    </Button>
                </UserCell>
            </UserRow>
          ))}
        </tbody>
      </UserTable>
      {showModal.open && (
        <ModalBackground>
          <ModalContent>
            <ModalCloseButton onClick={() => setShowModal({ open: false, targetId: null })}>X</ModalCloseButton>
            <h4>메시지 작성</h4>
            <TextInput
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="메시지를 입력하세요"
            />
            <Button onClick={handleMessageSubmit}>전송</Button>
          </ModalContent>
        </ModalBackground>
      )}
    </UserListContainer>
  );
};
