// import styled from 'styled-components';
import ContainerColumn from '../../../../../Components/Container/ContainerColumn';
import IntroductionTexts from './IntroductionTexts';
import { TextH1, TextP } from '../Text';
import Title from '../Title';

export default function Introduction(){

    return(
        <ContainerColumn>
            <Title>우리멋쟁이사자처럼 12기의 수료 조건은 어떻게 되나요?</Title>
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