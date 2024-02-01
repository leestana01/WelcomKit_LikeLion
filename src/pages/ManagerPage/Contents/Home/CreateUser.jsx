import React, { useState } from 'react';
import styled from 'styled-components';
import ContainerCard from '../../Components/ContainerCard';
import ContainerRow from '../../../../Components/Container/ContainerRow';

const Container = styled(ContainerCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

const ButtonRowContainer = styled(ContainerRow)`
  justify-content: center;
  padding: 10px;
  gap: 20px;
`

const Table = styled.table`
  border-collapse: collapse;
  width: 100%
`;


const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const TableCell = styled.td`
  height: 5px;
  border: 1px solid #ddd;
`;

const Input = styled.input`
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  border: 0;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  border: 0;
`;

const Button = styled(ContainerCard)`
  width: calc(100% - 20px); // 버튼 너비를 100%로 설정
  max-width: 300px;
  padding: 10px;

  &:hover {
    background: lightgray;
  }
`;

const ButtonDelete = styled(Button)`
  border : 0;
  border-radius: 0;
  background: #e48282;
  color: white;
`

const TextTitle = styled.h1`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`

export default function CreateUser() {
  const [users, setUsers] = useState([
    { name: '', password: '', department: '', part: '', team: '' },
  ]);

  const handleChange = (index, e) => {
    const newUsers = [...users];
    newUsers[index][e.target.name] = e.target.value;
    setUsers(newUsers);
  };

  const addUser = () => {
    setUsers([...users, { name: '', password: '', department: '', part: '', team: '' }]);
  };

  const handleAddUser = () => {
    alert('유저 생성을 완료하였습니다. (예정)')
  };

  const removeUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <Container>
      <TextTitle>유저 간편 생성</TextTitle>
      <p>주의! 마니또 시작 이후 유저 생성 시,</p>
      <p>해당 유저는 마니또가 편성되지 않으며 예기치 않은 문제가 발생할 수 있습니다.</p>
      <Table>
        <thead>
          <tr>
            <TableHeader>이름</TableHeader>
            <TableHeader>비밀번호(전화번호 뒤 4자리)</TableHeader>
            <TableHeader>학과</TableHeader>
            <TableHeader>파트</TableHeader>
            <TableHeader>소속 팀</TableHeader>
            <TableHeader width="50px">삭제</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <TableCell>
                <Input
                  name="name"
                  placeholder="이름"
                  value={user.name}
                  onChange={(e) => handleChange(index, e)}
                />
              </TableCell>
              <TableCell>
                <Input
                  name="password"
                  placeholder="비밀번호"
                  value={user.password}
                  onChange={(e) => handleChange(index, e)}
                />
              </TableCell>
              <TableCell>
                <Input
                  name="department"
                  placeholder="학과"
                  value={user.department}
                  onChange={(e) => handleChange(index, e)}
                />
              </TableCell>
              <TableCell>
                <Select
                  name="part"
                  value={user.part}
                  onChange={(e) => handleChange(index, e)}
                >
                  <option value="FRONT">프론트</option>
                  <option value="BACK">백엔드</option>
                  <option value="DESIGN">기획/디자인</option>
                </Select>
              </TableCell>
              <TableCell>
                <Select
                  name="team"
                  value={user.team}
                  onChange={(e) => handleChange(index, e)}
                >
                  <option value="0">없음</option>
                  {
                    [1,2,3,4,5,6,7,8,9,10].map(
                      el => {
                        return (<option key={el} value={el}>{el}</option>);
                      }
                    )
                  }
                </Select>
              </TableCell>
              <TableCell>
                <ButtonDelete onClick={() => removeUser(index)}>삭제</ButtonDelete>
              </TableCell>
            </tr>
          ))}
          <tr>
            <TableCell colSpan="6">
              <ButtonRowContainer>
                  <Button onClick={addUser}>+ 추가</Button>
                  <Button onClick={handleAddUser}>해당 유저 전부 생성</Button>
              </ButtonRowContainer>
            </TableCell>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
