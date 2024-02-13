import React from 'react';
import styled from 'styled-components';
import ContainerCard from '../../../Components/ContainerCard';
import { useNavigate } from 'react-router-dom';

const IconContainer = styled.div`
    color: ${props => props.$color || "#ff7b00"};
    margin-bottom: 10px;
`;

const NumberDisplay = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #333;
`;

const TextDisplay = styled.div`
    color: #777;
    margin: 5px 0;
`;

const UpdateButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${props => props.$color || "#ff7b00"};
    cursor: pointer;
    padding: 5px;
    transition: color 0.3s;

    &:hover {
        color: #cc6a00;
    }
`;

export default function CardForm({ $number, $title, $color, $managable, children }){

  const navigate = useNavigate();

  return (
    <ContainerCard>
      <IconContainer $color={$color}>
        {children}
      </IconContainer>
      <NumberDisplay>{$number||"0"}</NumberDisplay>
      <TextDisplay>{$title||"오류"}</TextDisplay>
      {
        $managable && <UpdateButton $color={$color} onClick={() => navigate($managable)}>{$title} 관리</UpdateButton>
      }
    </ContainerCard>
  );
};
