import React, { useState } from 'react';
import styled from 'styled-components';
import Introduction from './Components/1.Introduction/Introduction';
import Mind from './Components/2.Mind/Mind';
import Course from './Components/3.Course/Course';
import ForComplete from './Components/4.ForComplete/ForComplete';
import SNS from './Components/5.SNS/SNS';

const Container = styled.div`
  display: flex;
  background: #1e1e1e;
  height: calc(100vh - 83px);
`;

const Sidebar = styled.div`
  width: 250px;
  background: #333;
//   padding: 20px;
`;

const Button = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Content = styled.div`
  width: calc(100% - 540px);
  background: #222;
  color: white;
  padding: 20px;
`;

const App = () => {
  const [content, setContent] = useState(<Introduction/>);

  return (
    <Container>
      <Sidebar>
        <Button onClick={() => setContent(<Introduction/>)}>소개</Button>
        <Button onClick={() => setContent(<Mind/>)}>가치관</Button>
        <Button onClick={() => setContent(<Course/>)}>1년 과정</Button>
        <Button onClick={() => setContent(<ForComplete/>)}>수료 조건</Button>
        <Button onClick={() => setContent(<SNS/>)}>SNS</Button>
      </Sidebar>
      <Content>
        {content}
      </Content>
    </Container>
  );
};

export default App;
