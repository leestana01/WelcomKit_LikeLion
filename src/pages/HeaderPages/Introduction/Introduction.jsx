import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import Basic from '../../../Components/Buttons/Basic';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  width: 100%;
`

const PageContainer = styled(ContainerCenter)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
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
`

const Container = styled.div`
    width: 90%;
    min-width: 900px;
    height: 70vh;
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
font-size: 40px;
font-family: 'LINE-Bd';
background: linear-gradient(to bottom, #C8A96C, #7B5D28);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding-top: 2px;
display: inline-block;
`;

const Detail = styled.a`
font-size: 23px;
background: linear-gradient(to bottom, #C8A96C, #7B5D28);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
line-height: 50px; /* 라인 높이 조정 */
padding-top: 2px; /* 위쪽에 약간의 패딩 추가 */
display: inline-block; /* display 속성 조정 */
margin: 5px;
`;

const Text = styled.a`
font-family: 'LINE-Bd';
line-height: 23px;
padding-top: 2px;
display: inline-block;
color: white;
`;

const Event = styled.a`
font-family: 'LINE-Bd';
line-height: 23px;
padding-top: 2px;
display: inline-block;
color: white;
text-align: center;
`;

const CustomRow = styled.div`
display: flex;
flex-direction: row;
gap: 100px;
`;

const CustomColumn = styled.div`
display: flex;
flex-direction: column;
gap: 60px;
`;

const MiniColumn = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const CustomCenter = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const Ex = styled.a`
font-size: 17px;
color: #3F4853;
`;

const Orange = styled.a`
font-family: 'LINE-Bd';
font-size: 17px;
color: #FFA800;
`;

const Line = styled.div`
width: 80%;
height: 2px;
background-color: #FFA800;
position: relative;
margin: 20px auto;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -14px;
  left: 0;
  right: 0;
  height: 30px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #FFA800;
  position: relative;
  z-index: 2;
`;

export default function Component() {

    const facebook = () => {
        window.open("https://www.facebook.com/likelionhufs", "_blank");
    };

    const velog = () => {
        window.open("https://velog.io/@hufsglobal09", "_blank");
    };

    const instagram = () => {
        window.open("https://www.instagram.com/hufsglobal_likelion?igsh=eHpodjR2bjF0bzRn", "_blank");
    };

    const youtube = () => {
        window.open("https://www.youtube.com/channel/UCYaDkwVaOhuoe_LuFr3lWkA", "_blank");
    };

    return (
        <ContainerBackground>
            <PageContainer>
                <Title>LikeLion HUFS Global 12</Title>
                <Container>
                    <CustomColumn>
                        <MiniColumn>
                            <Text>1. <Detail>멋쟁이사자처럼</Detail>은 어떤 동아리인가요?</Text>
                            <Text>프로그래밍을 통해 상상을 현실로 이끌어내는 IT 동아리입니다.</Text>
                            <Text>멋사에 소속된 우리 모두는 <Orange>멋쟁이 사자</Orange>가 되기 위한 <Orange>예비 사자</Orange>이고,</Text>
                            <Text>각자의 포지션을 갈고 닦아 1년 동안 멋진 프로그램을 산출해냅니다.</Text>
                        </MiniColumn>
                        <MiniColumn>
                            <Text>2. <Detail>멋쟁이사자처럼</Detail>은 어떤 가치관을 가지고 있나요?</Text>
                            <Text>멋쟁이 사자처럼은 '사람과 기술을 연결한다'라는 Mission을 가지고 있습니다.</Text>
                            <Text>멋쟁이 사자처럼이 추구하는 Vision은 다음과 같습니다.</Text>
                            <br />
                            <Text>- IT 교육 기회를 제공하여 꿈꾸던 가능성을 열어준다.</Text>
                            <Text>- IT 기술로 IT 교육의 문제점을 해결한다.</Text>
                            <Text>- 지속 성장이 가능한 IT 커뮤니티를 구축한다.</Text>
                        </MiniColumn>
                        <MiniColumn>
                            <Text>3. <Detail>한국외대 글로벌캠퍼스 멋쟁이사자처럼 12기</Detail>의 1년 과정은 어떻게 되나요?</Text>
                            <Text>여러분이 가장 먼저 수행할 활동은 '미니 프로젝트' 입니다.</Text>
                            <Text>운영진과 아기사자가 골고루 섞여 팀이 구성되며,</Text>
                            <Text>짧은 기간동안 완성할만한 간단한 아이디어를 프로그램으로 구현 후 발표하시게 됩니다.</Text>
                            <br />
                            <Text>미니 프로젝트 이후의 활동은 아래와 같습니다.</Text>
                            <br />
                            <Line>
                                <CircleContainer>
                                    {Array.from({ length: 7 }).map((_, index) => (
                                        <Circle key={index} />
                                    ))}
                                </CircleContainer>
                            </Line>
                            <CustomCenter>
                                <CustomRow>
                                    <Event>중간고사 기간<br />(정기세션 휴식)</Event>
                                    <Event>아이디어톤</Event>
                                    <Event>기말고사 기간<br />(정기세션 휴식)</Event>
                                    <Event>종강</Event>
                                    <Event>중앙 해커톤</Event>
                                    <Event>개강</Event>
                                    <Event>2학기 프로젝트<br />또는 스터디</Event>
                                </CustomRow>
                            </CustomCenter>
                            <br />
                            <br />
                            <Text>여러분은 위의 주요 행사와 정기세션을 병행하며 멋사를 활동하시게 됩니다!</Text>
                        </MiniColumn>
                        <MiniColumn>
                            <Text>4. <Detail>한국외대 글로벌캠퍼스 멋쟁이사자처럼 12기</Detail>의 수료 조건은 어떻게 되나요?</Text>
                            <Text>멋사의 1년 과정 중 <Orange>아이디어톤</Orange>과 <Orange>중앙 해커톤</Orange>에 필수 참여하셔야 합니다.</Text>
                            <br />
                            <Text>이외에는,</Text>
                            <Text>- 멋사의 정기 세션에 성실히 참석 <Ex>(세션 장소와 시간은 Notion으로 안내됩니다.)</Ex></Text>
                            <Text>- 멋사의 과제를 성실히 수행 <Ex>(과제와 기한은 Notion으로 공지됩니다.)</Ex></Text>
                            <Text>- 멋사의 팀 프로젝트 활동에 성실히 참여 <Ex>(미니 프로젝트, 정기 프로젝트, 해커톤, 스터디 등)</Ex></Text>
                            <Text>위 3가지 조건이 있습니다.</Text>
                            <br />
                            <Text>성실하고 열정적으로 멋사의 활동에 임하시어, 멋사 수료증과 함께 행복하게 1년을 마치시길 기원합니다!</Text>
                        </MiniColumn>
                        <MiniColumn>
                            <Text>5. <Detail>한국외대 글로벌캠퍼스 멋쟁이사자처럼 12기</Detail>의 SNS가 궁금해요.</Text>
                            <Ex>아래의 버튼을 누르면 멋사의 SNS로 바로 이동합니다.</Ex>
                            <CustomRow>
                                <Basic text='멋사 FaceBook' $onClick={() => facebook()} />
                                <Basic text='멋사 Velog' $onClick={() => velog()} />
                                <Basic text='멋사 Instagram' $onClick={() => instagram()} />
                                <Basic text='멋사 Youtube' $onClick={() => youtube()} />
                            </CustomRow>
                        </MiniColumn>
                    </CustomColumn>
                </Container>
            </PageContainer>
        </ContainerBackground>
    )
}