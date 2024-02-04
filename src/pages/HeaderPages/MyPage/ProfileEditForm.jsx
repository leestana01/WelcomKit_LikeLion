import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';

const ProfileEditContainer = styled.div`
  width: calc(100% - 320px);
  min-width: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RowContainer = styled(ContainerRow)`
  gap: 20px;
`

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: calc(100% - 16px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: calc(100% - 16px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default function ProfileEditForm(){
  const [major, setMajor] = useState('');
  const [team, setTeam] = useState('0');
  const [part, setPart] = useState('FRONT');
  const [teamMessage, setTeamMessage] = useState('');

  const partType = {
    'FRONT' : '프론트엔드',
    'BACK' : '백엔드',
    'DESIGN' : '기획/디자인'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ major, team, part, teamMessage });
  };

  return (
    <ProfileEditContainer>
      <form onSubmit={handleSubmit}>

        <RowContainer>
          <FormGroup>
            <Label>이름 (수정불가)</Label>
            <Input type="text" value="이수혁" disabled />
          </FormGroup>
          <FormGroup>
            <Label>팀</Label>
            <Input type="text" value={team} disabled />
          </FormGroup>
        </RowContainer>

        <RowContainer>
          <FormGroup>
              <Label>파트</Label>
              <Input value={partType[part]} disabled />
            </FormGroup>
          <FormGroup>
            <Label>전공</Label>
            <Input type="text" value={major} disabled />
          </FormGroup>
        </RowContainer>

        <FormGroup>
          <Label>내 팀원들에게 전할 메시지</Label>
          <TextArea rows="4" value={teamMessage} onChange={(e) => setTeamMessage(e.target.value)} />
        </FormGroup>
        <SubmitButton type="submit">프로필 정보 수정</SubmitButton>
      </form>
    </ProfileEditContainer>
  );
};
