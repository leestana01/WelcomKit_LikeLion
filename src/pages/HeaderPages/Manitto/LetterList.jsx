import { useEffect, useState } from 'react';
import styled from 'styled-components';
import getManitoLetters from '../../../APIs/get/manito/getManitoLetters';
import getManitoLettersByMe from '../../../APIs/get/manito/getManitoLettersByMe';

const LetterListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    max-height: ${props => props.$max_height};

    gap: 1rem;
    list-style: none;
    overflow-y: auto;
    padding-right: 1rem;
`

const LetterItem = styled.li`
    background-color: #fffae6;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;

    color: #4b4a4a;
    font-family: 'Georgia', serif;
    font-size: 16px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
`

export default function LetterList({$max_height, $letterType}) {
    const [letters, setLetters] = useState([]);
    
    useEffect(()=>{
        const fetchFunction = $letterType === "mine" ? getManitoLettersByMe : getManitoLetters;
        const fetchLetters = async () => {
            const respone = await fetchFunction();
            setLetters(respone);
        }
        fetchLetters();
    }, [$letterType])

    return(
        <LetterListContainer $max_height={$max_height}>
            {
                (letters.length === 0) && (
                    <p>아직 맞니또로부터 받은 메시지가 없어요!</p>
                )
            }
            {letters.map((letter, index) => (
                <LetterItem key={index}>{letter.message}</LetterItem>
            ))}
        </LetterListContainer>
    )
}
