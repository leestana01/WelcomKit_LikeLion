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
    // const Letters = [
    //     {
    //         "message": "안녕하세요 테스트님! 테스트님의 열정에 감탄했습니다. 앞으로 멋사에서 테스트님이 발휘하실 테스트 정신, 많이 기대하겠습니다!",
    //     },
    //     {
    //         "message": "예시 메시지입니다!",
    //     },
    //     {
    //         "message": "예시 메시지 2 입니다!!!!!!!!!!!!!!!!!!!",
    //     },
    //     {
    //         "message": "예시 메시지 2 입니다!!!!!!!!!!!!!!!!!!!",
    //     },
    //     {
    //         "message": "예시 메시지 2 입니다!!!!!!!!!!!!!!!!!!!",
    //     },
    //     {
    //         "message": "예시 메시지 2 입니다!!!!!!!!!!!!!!!!!!!",
    //     },
    //     {
    //         "message": "예시 메시지 2 입니다!!!!!!!!!!!!!!!!!!!",
    //     }
    // ]
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
            {letters.map((letter, index) => (
                <LetterItem key={index}>{letter.message}</LetterItem>
            ))}
        </LetterListContainer>
    )
}
