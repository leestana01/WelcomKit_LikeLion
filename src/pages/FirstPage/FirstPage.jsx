import styled from 'styled-components';
import Login from './Login';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  gap: 50px;

  background-color: black;
`

const DarkLogo = styled.img`
    filter: brightness(0.3);
    width: ${props => props.$isFull ? "100%" : "400px"};
    height: ${props => props.$isFull ? "100%" : null};
`;

export default function Component() {

  return (
      <BodyContainer>
        <DarkLogo src="img/likelion_logo.png" alt="Logo" />
        <Login/>
      </BodyContainer>
  );
};
