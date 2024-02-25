// import styled from 'styled-components';
import ContainerColumn from '../../../../../Components/Container/ContainerColumn';
import ForCompleteTexts from './ForCompleteTexts';
import { TextH1, TextP } from '../Text';
import Title from '../Title';

export default function ForComplete() {

    return (
        <ContainerColumn>
            <Title>LIKE LION HUFS global의 수료 조건</Title>

            {ForCompleteTexts.map((section, index) => (
                <div key={index}>
                    <TextH1>{section[0]}</TextH1>
                    {section[1].map((paragraph, pIndex) => (
                        <TextP key={pIndex}>{paragraph}</TextP>
                    ))}
                </div>
            ))}
        </ContainerColumn>
    )
}