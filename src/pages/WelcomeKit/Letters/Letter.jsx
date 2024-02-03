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

export default function Letter({$src}){

    return(
        <LetterForm>
            <GridImg src={$src || "/img/likelion_icon.png"}/>
            <TextForm>
                <div>
                    <GirdText>홍길동</GirdText>
                    <p>프론트</p>
                </div>
                <div>
                    <p>개똥이님의 전문성과 열정은 늘 저희 모두에게 큰 동기부여가 되었습니다. 어떤 상황에서도 최선을 다하는 모습, 문제를 해결하기 위해 끊임없이 노력하는 모습은 정말 존경스럽습니다. 개똥이님과 함께 일할 수 있어서 항상 감사하게 생각하고 있습니다.</p>
                </div>
            </TextForm>
        </LetterForm>
    )
}