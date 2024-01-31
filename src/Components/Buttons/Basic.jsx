import styled from 'styled-components';

const Background = styled.button`
border: none;
background-image: linear-gradient(to bottom, #C8A96C, #7B5D28);
display: flex;
align-items: center;
justify-content: center;
padding: 3px;
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

export default function Component({ text, width, $onClick }) {
    return (
        <Background onClick={$onClick}>
            <Div width={width}>
                {text}
            </Div>
        </Background>
    )
}
