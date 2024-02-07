import styled from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';
import StyledImg from '../../../Components/Container/CustomImg';

const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 80px;
`

const MiniGapColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

// const StepColumn = styled.div`
// flex: 1;
// display: flex;
// flex-direction: column;
// `;

const CustomRow = styled.div`
flex: 1;
display: flex;
flex-direction: row;
gap: 10px;
`;

const RoadContainer = styled.div`
    flex: 2;
    width: 100%;
    height: 400px;
    margin-right: 30px;
    background-color: #010A13;
    border: 2px solid #372C16;
    padding: 30px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 10px;
        border-radius: 20px;
        margin: 5px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 20px;
        margin: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #C8A96C, #7B5D28);
        border-radius: 20px;
        margin: 5px;
    }
    
`;

const Title = styled.h1`
    color: #CABB8F;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
`;

const Detail = styled.a`
    color: #CABB8F;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
`;

const BoxText = styled.h1`
    color: #745727;
    font-size: 25px;
    font-weight: bold;
    text-align: left;
`;

export default function Component({ isWho }) {

    return (
        <>
            {isWho === 1 && <RoadContainer>
                <Column>
                    <Title>사용자의 눈에 보이는 모든 것</Title>

                    <MiniGapColumn>
                        <BoxText>Step 1. 기초 과정</BoxText>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_github.png'} width='80px' height='80px' />
                            <Detail>버전 관리와 협업을 위한 깃허브</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_html.png'} width='120px' height='80px' />
                            <Detail>웹 개발자에게 가장 기본적인 언어, HTML/CSS</Detail>
                        </ContainerRow>
                    </MiniGapColumn>

                    <MiniGapColumn>
                        <BoxText>Step 2. 발전 과정</BoxText>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_jsts.png'} width='120px' height='80px' />
                            <Detail>필수적인 스크립트 언어인 자바스크립트와 타입스크립트</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_bootstrap.png'} width='120px' height='80px' />
                            <Detail>부트 스트랩을 이용한 웹 디자인 실전</Detail>
                        </ContainerRow>
                    </MiniGapColumn>

                    <MiniGapColumn>
                        <BoxText>Step 3. 심화 과정</BoxText>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_react.png'} width='140px' height='80px' />
                            <Detail>웹 프론트엔드 개발자에게 가장 대표적인 프레임워크인 React와 Vue.js</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_jest.png'} width='130px' height='80px' />
                            <Detail>Meta가 만든 자바스크립트 테스팅 라이브러리인 제스트</Detail>
                        </ContainerRow>
                    </MiniGapColumn>
                </Column>
            </RoadContainer>}

            {isWho === 2 && <RoadContainer>
                <Column>
                    <Title>데이터를 저장하고, 관리하는 모든 과정</Title>

                    <MiniGapColumn>
                        <BoxText>Step 1. 기초</BoxText>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_github.png'} width='80px' height='80px' />
                            <Detail>버전 관리와 협업을 위한 깃허브</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <CustomRow>
                                <StyledImg src={'/img/icon_java.png'} width='110px' height='100px' />
                                <StyledImg src={'/img/icon_python.png'} width='110px' height='100px' />
                            </CustomRow>
                            <Detail>웹 백엔드 개발의 첫걸음으로서, 자바와 파이썬</Detail>
                        </ContainerRow>
                    </MiniGapColumn>

                    <MiniGapColumn>
                        <BoxText>Step 2. 발전 과정</BoxText>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_linux.png'} width='120px' height='80px' />
                            <Detail>웹 백엔드 개발의 기본기인 리눅스 쉘 프로그래밍</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_docker.png'} width='110px' height='100px' />
                            <Detail>개발 효율 향상을 위한 Docker 사용 익히기</Detail>
                        </ContainerRow>
                    </MiniGapColumn>

                    <MiniGapColumn>
                        <BoxText>Step 3. 심화 과정</BoxText>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_django.png'} width='150px' height='80px' />
                            <Detail>백엔드 프레임워크, 데이터베이스, REST API 학습</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_springboot.png'} width='150px' height='100px' />
                            <Detail>가장 대표적인 웹 백엔드 프레임워크인 장고와<br />Java 기반인 스프링부트로 실전 개발</Detail>
                        </ContainerRow>
                    </MiniGapColumn>
                </Column>
            </RoadContainer>}

            {isWho === 3 && <RoadContainer>
                <Column>
                    <Title>아이디어 실현의 꽃</Title>

                    <MiniGapColumn>
                        <BoxText>Step 1. 기초</BoxText>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_ideation.png'} width='80px' height='80px' />
                            <Detail>디자인 싱킹 기반으로 문제에 대한 개선점을 아이디어로 구체화</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <CustomRow>
                                <StyledImg src={'/img/icon_github.png'} width='80px' height='100px' />
                                <StyledImg src={'/img/icon_html.png'} width='120px' height='80px' />
                            </CustomRow>
                            <Detail>협업을 위한 깃허브와 기본적인 HTML/CSS 지식</Detail>
                        </ContainerRow>
                    </MiniGapColumn>

                    <MiniGapColumn>
                        <BoxText>Step 2. 발전 과정</BoxText>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_figma.png'} width='140px' height='80px' />
                            <Detail>반응형 웹사이트 UI 디자인에 최적화된 편집 프로그램</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_uxui.png'} width='140px' height='100px' />
                            <Detail>사용자에게 만족스러운 경험을 제공하기 위한 설계</Detail>
                        </ContainerRow>
                    </MiniGapColumn>

                    <MiniGapColumn>
                        <BoxText>Step 3. 심화 과정</BoxText>
                        <ContainerRow>
                            <CustomRow>
                                <StyledImg src={'/img/icon_adobe.png'} width='140px' height='80px' />
                                <StyledImg src={'/img/icon_zeplin.png'} width='100px' height='80px' />
                            </CustomRow>
                            <Detail>UXUI 디자이너에게 필수적인 제플린과 어도비 XD</Detail>
                        </ContainerRow>
                        <ContainerRow>
                            <StyledImg src={'/img/icon_AtoZ.png'} width='140px' height='50px' />
                            <Detail>웹사이트에 대한 모든 것을 기획 및 설계하는 웹 기획자</Detail>
                        </ContainerRow>
                    </MiniGapColumn>
                </Column>
            </RoadContainer>}
        </>
    )
}