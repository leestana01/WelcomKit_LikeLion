// import styled from 'styled-components';
import ContainerColumn from '../../../../../Components/Container/ContainerColumn';
import MindTexts from './MindTexts';
import { TextH1, TextP } from '../Text';
import Title from '../Title';

export default function Mind() {

    return (
        <ContainerColumn>
            <Title>Mind of LIKE LION HUFS global</Title>
            {MindTexts.map((section, index) => (
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