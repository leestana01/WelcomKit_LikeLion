import styled from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';
import ContainerColumn from '../../../Components/Container/ContainerColumn';

const LetterForm = styled(ContainerRow)`
    justify-content: start;
    gap: 2rem;

    width: width(100% - 40px);
    height: 150px;
    margin-right: 30px;

    background-color: #061627;
    border: 2px solid #372C16;
    padding: 20px;
    overflow-y: auto;
`

const TextForm = styled(ContainerColumn)`
    justify-content: start;
    gap: 2rem;
    height: 100%;
`

const GridImg = styled.img`
    height: 100%;
    aspect-ratio: 1 / 1;
`

const GirdText = styled.p`
    color: ${props => props.$color};
    font-family: 'LINE-Bd', sans-serif;
    font-size: ${props => props.$font_size || "1.5rem"};
`

export default function Letter({$name, $part, $message, $src}){

    return(
        <LetterForm>
            <GridImg src={$src || "/img/likelion_icon.png"}/>
            <TextForm>
                <div>
                    <GirdText>{$name}</GirdText>
                    <p>{$part}</p>
                </div>
                <div>
                    <p>{$message}</p>
                </div>
            </TextForm>
        </LetterForm>
    )
}