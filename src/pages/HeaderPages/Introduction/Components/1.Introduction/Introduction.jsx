import styled from 'styled-components';
import ContainerColumn from '../../../../../Components/Container/ContainerColumn';
import IntroductionTexts from './IntroductionTexts';
import { TextH1, TextP } from '../Text';
import Title from '../Title';

const CustomStyledImg = styled.img`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    border-radius: 20px;
    margin: 10px;
`;

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
                    {index === 0 && <CustomStyledImg src={'/img/intro_img2.jpg'} width='50%' height='30vh' />}
                    {index === 1 && <CustomStyledImg src={'/img/intro_img4.jpg'} width='50%' height='30vh' />}
                    {index === 2 && <CustomStyledImg src={'/img/intro_img1.jpg'} width='50%' height='30vh' />}
                    {index === 3 && <CustomStyledImg src={'/img/intro_img3.jpg'} width='50%' height='30vh' />}
                    {index === 4 && <CustomStyledImg src={'/img/intro_img5.jpg'} width='50%' height='30vh' />}
                </div>
            ))}
        </ContainerColumn>
    )
}