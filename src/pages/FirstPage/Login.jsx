import React, { useState } from 'react';
import styled from 'styled-components';
import { login } from '../../APIs/post/session';

const NeumorphicForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 10px;

  background-color: #e0e5ec;
  border-radius: 20px;
  box-shadow: 8px 8px 15px #a3b1c6,
              -8px -8px 15px #ffffff;
  text-align: center;
`;

const NeumorphicInput = styled.input`
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  box-shadow: inset 4px 4px 4px #a3b1c6,
              inset -4px -4px 4px #ffffff;
`;

const NeumorphicButton = styled.button`
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #e0e5ec;
  box-shadow: 6px 6px 10px #a3b1c6,
              -6px -6px 10px #ffffff;
  transition: 0.3s;
  
  &:hover {
    box-shadow: 2px 2px 5px #a3b1c6,
                -2px -2px 5px #ffffff;
  }
`;

const WelcomeText = styled.h2`
  font-family: 'LINE-Bd';
  font-size: 2rem;
  color: #156082;
`

const TextDescription = styled.p`

`

const NameInputForm = () => {
  const [name, setName] = useState('');
  const [pw, setPW] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  if (window.innerWidth <= 768) {
    alert('모바일은 접속 불가합니다');
    return;
  }

    const isSuccess = await login(name, pw); // 로그인 성공 여부 받기
    if (!isSuccess) {
        alert('이름 혹은 비밀번호가 일치하지 않습니다.');
        return;
    }
    openFixedSizeWindow(`${window.location.origin}/main`, 1600, 1080);
};

  const openFixedSizeWindow = (url, width, height) => {
    // 새 창을 정해진 크기로 열고, 크기 조절을 금지
    window.open(url, '_blank', `width=${width},height=${height},resizable=no`);
  };

  return (
      <NeumorphicForm onSubmit={handleSubmit}>
        <WelcomeText>환영합니다</WelcomeText>
        <TextDescription>여러분을 위해 작은 선물을 준비했습니다</TextDescription>
        <TextDescription>이름을 적고 입장한 뒤, 확인해볼까요?</TextDescription>
        <NeumorphicInput
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <NeumorphicInput
          type="password"
          placeholder="비밀번호(전화번호 뒤 4자리) 입력"
          value={pw}
          onChange={(e) => setPW(e.target.value)}
        />
        <NeumorphicButton type="submit">입장</NeumorphicButton>
      </NeumorphicForm>
  );
};

export default NameInputForm;



// const openFixedSizeWindow = (url, width, height) => {
//   // 새 창을 정해진 크기로 열고, 크기 조절을 금지
//   window.open(url, '_blank', `width=${width},height=${height},resizable=no`);
// };
// <StyledLink onClick={() => openFixedSizeWindow('http://localhost:3000/main', 1600, 1080)}>
//                 링크 열기
//             </StyledLink>