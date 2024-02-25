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
//   padding: 20px;
background: linear-gradient(to bottom, #020d16, #07222f);
`;

const Button = styled.button`
background-color: transparent;
border: none;
display: flex;
align-items: center;
justify-content: center;
cursor: ${props => props.$cursor ? "pointer" : null};
&:hover {
    background-image: linear-gradient(to right, #8F6E2E, transparent);
}
color: #CABB8F;
font-size: 30px;
font-family: 'LINE-Bd';

width: 100%;
height: 90px;

border-left: ${props => props.$isActive ? '6px solid #CABB8F' : 'none'};
`;

const Content = styled.div`
  width: calc(100% - 540px);
  background: linear-gradient(to bottom, #020d16, #07222f);
  color: white;
  padding: 20px;
`;

const App = () => {
  const [activeButton, setActiveButton] = useState("Introduction");
  const [content, setContent] = useState(<Introduction />);

  const handleButtonClick = (buttonName, contentComponent) => {
    setActiveButton(buttonName);
    setContent(contentComponent);
  };

  return (
    <Container>
      <Sidebar>
        <Button $isActive={activeButton === "Introduction"} onClick={() => handleButtonClick("Introduction", <Introduction />)}>소개</Button>
        <Button $isActive={activeButton === "Mind"} onClick={() => handleButtonClick("Mind", <Mind />)}>가치관</Button>
        <Button $isActive={activeButton === "Course"} onClick={() => handleButtonClick("Course", <Course />)}>1년 과정</Button>
        <Button $isActive={activeButton === "ForComplete"} onClick={() => handleButtonClick("ForComplete", <ForComplete />)}>수료 조건</Button>
        <Button $isActive={activeButton === "SNS"} onClick={() => handleButtonClick("SNS", <SNS />)}>SNS</Button>
      </Sidebar>
      <Content>
        {content}
      </Content>
    </Container>
  );
};

export default App;
