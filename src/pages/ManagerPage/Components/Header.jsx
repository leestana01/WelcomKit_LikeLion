import { styled } from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 0 1rem;
    height: 75px;
    border-bottom: 1px solid black;
`;

const TextTitle = styled.h1`
    font-family: LINE-Bd;
    font-size: 1.5rem;
    color: #888;
`

export default function Component() {
    return(
        <HeaderContainer>
            <ContainerRow>
                <TextTitle>운영진 전용 관리 페이지</TextTitle>
            </ContainerRow>
            <ContainerRow>
                <p>로그아웃</p>
            </ContainerRow>
        </HeaderContainer>
    )
};