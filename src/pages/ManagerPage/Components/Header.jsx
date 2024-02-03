import { styled } from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';
import { useNavigate } from 'react-router';

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

const TextReturn = styled.p`
    cursor: pointer;
`
export default function Component() {
    const navigate = useNavigate();
    return(
        <HeaderContainer>
            <ContainerRow>
                <TextTitle>운영진 전용 관리 페이지</TextTitle>
            </ContainerRow>
            <ContainerRow>
                <TextReturn onClick={() => navigate('/main')}>돌아가기</TextReturn>
            </ContainerRow>
        </HeaderContainer>
    )
};