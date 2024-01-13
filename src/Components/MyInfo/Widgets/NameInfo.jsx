import styled from 'styled-components';

const NameInfoContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    height: 80px;
`

const RoundImg = styled.img`
    width: 40px;
    height: 35px;
`

const RoundDiv = styled.div`
    width: 40px;
    height: 40px;
    padding: 10px;

    border : 3px solid orange;
    border-radius : 50%;
`

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 40px;
`

const StyledName = styled.h1`
    font-size: 1.5rem;
`
const NameDescription = styled.p`
    color: #08A45D;
`


export default function Component(){

    return(
        <NameInfoContainer>
            <RoundDiv>
                <RoundImg src='/img/likelion_icon.png'/>
            </RoundDiv>
            <NameContainer>
                <StyledName>이 수 혁</StyledName>
                <NameDescription> 신규 아기 사자</NameDescription>
            </NameContainer>

        </NameInfoContainer>
    )

}