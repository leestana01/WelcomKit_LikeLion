import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import Basic from '../../../Components//Buttons/Basic';
import CustomImg from '../../../Components/Container/CustomImg';
import ContainerColumn from '../../../Components/Container/ContainerColumn';
import ContainerRow from '../../../Components/Container/ContainerRow';
import StyledImg from '../../../Components/Container/CustomImg';

const Column = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 40px;
overflow-y: auto;
`

const MiniGapColumn = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 20px;
`;

const RoadContainer = styled.div`
flex: 2;
width: 100%;
height: 100%;
margin-right: 30px;
background-color: #010A13;
border: 2px solid #372C16;
padding: 20px;
overflow-y: auto;
`;

const Title = styled.h1`
color: #CABB8F;
font-weight: bold;
font-size: 30px;
text-align: center;
`;

const Detail = styled.a`
color: #CABB8F;
font-weight: bold;
font-size: 15px;
`;

const BoxText = styled.h1`
color: #745727;
font-size: 20px;
font-weight: bold;
text-align: left;
`;

export default function Component({ isWho }) {

    return (
        <>
            {isWho === 1 && <RoadContainer>
                <Column>
                    <Title>사용자의 눈에 보이는 모든 것</Title>
                    <BoxText>Step 1. 기초 과정</BoxText>
                    <MiniGapColumn>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_github.png'} width='80px' height='80px' />
                            <Detail>버전 관리와 협업을 위한 깃허브</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_html.png'} width='120px' height='80px' />
                            <Detail>웹 개발자에게 가장 기본적인 언어, HTML/CSS</Detail>
                        </ContainerRow>
                    </MiniGapColumn>

                    <BoxText>Step 2. 발전 과정</BoxText>
                    <MiniGapColumn>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_jsts.png'} width='120px' height='80px' />
                            <Detail>필수적인 스크립트 언어인 자바스크립트와 타입스크립트</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_bootstrap.png'} width='120px' height='80px' />
                            <Detail>부트 스트랩을 이용한 웹 디자인 실전</Detail>
                        </ContainerRow>
                    </MiniGapColumn>
                </Column>
            </RoadContainer>}

            {isWho === 2 && <RoadContainer>
                <Column>
                    <Title>데이터를 저장하고, 관리하는 모든 과정</Title>
                    <MiniGapColumn>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_github.png'} width='80px' height='80px' />
                            <Detail>버전 관리와 협업을 위한 깃허브</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_java.png'} width='120px' height='100px' />
                            <StyledImg src={'/img/icon_python.png'} width='120px' height='100px' />
                            <Detail>웹 백엔드 개발의 첫걸음으로서, 자바와 파이썬</Detail>
                        </ContainerRow>
                    </MiniGapColumn>
                </Column>
            </RoadContainer>}

            {isWho === 3 && <RoadContainer>
                <Column>
                    <Title>아이디어 실현의 꽃</Title>
                    <MiniGapColumn>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_ideation.png'} width='80px' height='80px' />
                            <Detail>버전 관리와 협업을 위한 깃허브</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_github.png'} width='80px' height='100px' />
                            <StyledImg src={'/img/icon_html.png'} width='120px' height='80px' />
                            <Detail>웹 백엔드 개발의 첫걸음으로서, 자바와 파이썬</Detail>
                        </ContainerRow>
                    </MiniGapColumn>
                </Column>
            </RoadContainer>}
        </>
    )
}