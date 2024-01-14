import styled from 'styled-components';
// import logo from '../../../public/img/likelion_logo.png'

const BodyContainer = styled.div`
    position: relative;
`

const ChildrenContainer = styled.div`
    display: flex;
    position:absolute;
    width: calc(100% - 250px);
    height: calc(100vh - 143px);
    color: white;
`

const BlackBackgroundDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: calc(100% - 250px);
    height: calc(100vh - 83px);
    background-color: black;
    color : white;

    position: absolute;
`;

const DarkLogo = styled.img`
    filter: brightness(0.3);
    // margin-left: ${props => props.$isFull ? null : "70px"};
    width: ${props => props.$isFull ? "100%" : "400px"};
    height: ${props => props.$isFull ? "100%" : null};
`;

export default function Component({$imgSrc, children}) {
    return (
        <BodyContainer>
            <BlackBackgroundDiv>
                <DarkLogo $isFull={$imgSrc} src={$imgSrc || "/img/likelion_logo.png"} alt="Logo" />
            </BlackBackgroundDiv>
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        </BodyContainer>
    )
}