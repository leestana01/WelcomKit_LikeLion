import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import Letter from './Letter';
import { useEffect, useState } from 'react';
import getWelcomeLetters from '../../../APIs/get/getWelcomeLetters';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem 0;
    gap: 30px;
    width: 100%;
`

const GridWidget = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: calc(100% - 30px);
    overflow-y: auto;
`;

const TextHeader = styled.h1`
  font-family: LINE-Bd;
  font-size: 2rem;
`;

export default function Component(){
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        const fetchLetters = async () => {
            const response = await getWelcomeLetters();
            setLetters(response);
        }
        fetchLetters();
    },[])

    return (
        <ContainerBackground><PageContainer>
            <TextHeader>여러분을 환영하여</TextHeader>
            <TextHeader>운영진 분들이 편지를 써주셨어요!</TextHeader>
            <GridWidget>
                {
                    letters.map(letter => {
                        return <Letter 
                        $name={letter.senderName}
                        $part={letter.part}
                        $message={letter.message}
                        $src={letter.profileMiniUrl}
                        />
                    })
                }
                <Letter $message={'이 메시지는 테스트 용도입니다. 만약 보인다면 오류이므로 즉각 신고 바랍니다.'}/>
                <Letter $message={'이 메시지는 테스트 용도입니다. 만약 보인다면 오류이므로 즉각 신고 바랍니다.'}/>
                <Letter $message={'이 메시지는 테스트 용도입니다. 만약 보인다면 오류이므로 즉각 신고 바랍니다.'}/>
                <Letter $message={'이 메시지는 테스트 용도입니다. 만약 보인다면 오류이므로 즉각 신고 바랍니다.'}/>
            </GridWidget>
        </PageContainer></ContainerBackground>
    )
}