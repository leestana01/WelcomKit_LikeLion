import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import Letter from './Letter';
import GridWidget from './GridWidget';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 30px;
    width: 100%;
`

export default function Component(){

    return (
        <ContainerBackground><PageContainer>
            <GridWidget>
                <Letter />
                <Letter />
                <Letter />
                <Letter />

            </GridWidget>
        </PageContainer></ContainerBackground>
    )
}