import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContainerRow from "../../../../Components/Container/ContainerRow";
import partType from '../../../../partType';
import updateManagerInfo from '../../../../APIs/post/updateManagerInfo';

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

export default function ProfileEditForm({$name, $isTeamLeader, $teamId, $part, $department, $teamMessage, $teamLeaderMessage}){
  const [major, setMajor] = useState($department);
  const [team, setTeam] = useState($teamId);
  const [part, setPart] = useState($part);
  const [teamMessage, setTeamMessage] = useState($teamMessage);
  const [teamLeaderMessage, setTeamLeaderMessage] = useState($teamLeaderMessage);

  useEffect(() => {
    setTeam($teamId);
    setPart($part);
    setMajor($department);
    setTeamMessage($teamMessage);
    setTeamLeaderMessage($teamLeaderMessage);
  }, [$teamId, $part, $department, $teamMessage, $teamLeaderMessage])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateManagerInfo(major, team, part, teamMessage, teamLeaderMessage)
      .then(() =>{
        alert('내 정보가 업데이트 되었습니다.');
        window.location.reload();
      });
  };

  return (
    <ProfileEditContainer>
      <form onSubmit={handleSubmit}>

        <RowContainer>
          <FormGroup>
            <Label>이름 (수정불가)</Label>
            <Input type="text" value={$name || ''} disabled />
          </FormGroup>
          <FormGroup>
            <Label>팀장여부 (수정불가)</Label>
            <Input type="text" value={$isTeamLeader || "False"} disabled />
          </FormGroup>
        </RowContainer>

        <FormGroup>
          <Label>전공</Label>
          <Input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
        </FormGroup>

        <RowContainer>
          <FormGroup>
            <Label>팀 ( 『무조건』 팀장 양도하고 변경해야 오류 안납니다! )</Label>
            <Select value={team} onChange={(e) => setTeam(e.target.value)}>
              {[...Array(11).keys()].map((n) => (
                <option key={n} value={n}>{n === 0 ? "(없음)" : n}</option>
              ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>파트</Label>
            <Select value={part} onChange={(e) => setPart(e.target.value)}>
              {Object.entries(partType).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </Select>
          </FormGroup>
        </RowContainer>
        <RowContainer>
          <FormGroup>
            <Label>내 팀원들에게 전할 메시지</Label>
            <TextArea value={teamMessage} onChange={(e) => setTeamMessage(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>팀장의 한마디(팀장인 경우)</Label>
            <TextArea value={teamLeaderMessage} onChange={(e) => setTeamLeaderMessage(e.target.value)} />
          </FormGroup>
        </RowContainer>
        <SubmitButton type="submit">프로필 정보 수정</SubmitButton>
      </form>
    </ProfileEditContainer>
  );
};
