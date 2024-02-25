import styled from 'styled-components';

const FillWidth = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;
    margin-bottom: 2rem;
`

const Text = styled.h1`
    font-size: 40px;
    font-family: 'LINE-Bd';
    text-align: center;
    background: linear-gradient(to bottom, #C8A96C, #7B5D28);
    -webkit-background-clip: text;
    color: transparent;
    padding-top: 2px;
`;

export default function Title({children}){

    return (
        <FillWidth>
            <Text>{children}</Text>
        </FillWidth>
    )
}