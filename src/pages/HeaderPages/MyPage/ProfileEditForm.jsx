import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';
import partType from '../../../partType';
import updateTeamMessage from '../../../APIs/post/updateTeamMessage';

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

// const Select = styled.select`
//   width: 100%;
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

const TextArea = styled.textarea`
  width: calc(100% - 16px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.$color || "#007bff"};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export default function ProfileEditForm({$name, $teamId, $part, $department, $teamMessage}){
  const [teamMessage, setTeamMessage] = useState('');

  useEffect(() => {
    setTeamMessage($teamMessage);
  }, [$teamMessage])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTeamMessage(teamMessage)
      .then(() =>{
        alert('팀 메시지가 업데이트 되었습니다.');
        window.location.reload();
      });
  };

  return (
    <ProfileEditContainer>
      <form onSubmit={handleSubmit}>
        <RowContainer>
          <FormGroup>
            <Label>이름</Label>
            <Input type="text" value={$name || ''} disabled />
          </FormGroup>
          <FormGroup>
            <Label>팀</Label>
            <Input type="text" value={$teamId === 0 ? '편성 전' : $teamId || 0} disabled />
          </FormGroup>
        </RowContainer>

        <RowContainer>
          <FormGroup>
              <Label>파트</Label>
              <Input value={partType[$part || 'FRONT']} disabled />
            </FormGroup>
          <FormGroup>
            <Label>전공</Label>
            <Input type="text" value={$department || ''} disabled />
          </FormGroup>
        </RowContainer>

        <RowContainer>
          <FormGroup>
            <Label>내 팀원들에게 전할 메시지</Label>
            <TextArea rows="2" value={teamMessage} onChange={(e) => setTeamMessage(e.target.value)} />
          </FormGroup>
          <SubmitButton type="submit">프로필 정보 수정</SubmitButton>
        </RowContainer>
      </form>
    </ProfileEditContainer>
  );
};