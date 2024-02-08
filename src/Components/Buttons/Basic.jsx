import styled from 'styled-components';

const Background = styled.button`
    border: none;
    background-image: linear-gradient(to bottom, #C8A96C, #7B5D28);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    cursor: ${props => props.$cursor ? "pointer" : null};
`;

const Div = styled.div`
    width: ${props => props.width || '150px'};
    height: ${props => props.width || '40px'};
    background-color: #1E2328;
    color: #CABB8F;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-image: linear-gradient(to top, #8F6E2E, transparent);
    }
`;

export default function Basic({ text, width, $onClick , $cursor}) {
    return (
        <Background onClick={$onClick} $cursor={$cursor}>
            <Div width={width}>
                {text}
            </Div>
        </Background>
    )
}
