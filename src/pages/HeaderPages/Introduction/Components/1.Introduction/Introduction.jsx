// import styled from 'styled-components';
import ContainerColumn from '../../../../../Components/Container/ContainerColumn';
import IntroductionTexts from './IntroductionTexts';
import { TextH1, TextP } from '../Text';
import Title from '../Title';

export default function Introduction() {

    return (
        <ContainerColumn>
            <Title>LIKE LION HUFS global 소개</Title>
            {IntroductionTexts.map((section, index) => (
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