import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import StyledImg from '../../../Components/Container/CustomImg';

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
    margin: 30px;
    gap: 30px;
`

const Container = styled.div`
    width: 90%;
    min-width: 900px;
    height: 300px;
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

const CustomRow = styled.div`
display: flex;
flex-direction: row;
gap: 40px;
`;

const CustomColumn = styled.div`
display: flex;
flex-direction: column;
gap: 60px;
`;

const MiniColumn = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
`;

const Title = styled.h1`
font-size: 40px;
font-family: 'LINE-Bd';
background: linear-gradient(to bottom, #C8A96C, #7B5D28);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding-top: 2px; /* 위쪽에 약간의 패딩 추가 */
display: inline-block; /* display 속성 조정 */
`;

const SemiTitle = styled.h1`
font-size: 25px;
font-family: 'LINE-Bd';
background: linear-gradient(to bottom, #C8A96C, #7B5D28);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding-top: 2px; /* 위쪽에 약간의 패딩 추가 */
display: inline-block; /* display 속성 조정 */
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
line-height: 23px; /* 라인 높이 조정 */
padding-top: 2px; /* 위쪽에 약간의 패딩 추가 */
display: inline-block; /* display 속성 조정 */
color: white;
`;

export default function Component() {

    return (
        <ContainerCenter>
            <PageContainer>
                <Container>
                    <CustomColumn>
                        <Title>멋쟁이 사자가 되신 것을 환영합니다.</Title>

                        <MiniColumn>
                            <SemiTitle>1. 우리는 이렇게 활동해요.</SemiTitle>

                            <Text>
                                우리는
                                <Detail>상호 존중 위에 쌓아올린 유대의 가치</Detail>
                                를 믿어요.<br />
                                학년과 학번이 높든 낮든
                                우리는 모두
                                <Detail>멋쟁이 사자</Detail> 예요.
                                <br />
                                이 문화를 위해,<br />
                                동아리 안에서는
                                <Detail>서로 존댓말</Detail>
                                을 사용해요.<br />
                                학년, 학번에 상관없이
                                <Detail>~님</Detail>
                                으로 서로를 불러요.
                            </Text>
                        </MiniColumn>

                        <MiniColumn>
                            <SemiTitle>2. 우리의 단짝 친구를 소개할게요.</SemiTitle>

                            <Text>
                                일년동안 우리는 Github, Slack, Notion, Gather, Discord와 단짝 친구가 될거예요.
                            </Text>
                        </MiniColumn>
                    </CustomColumn>
                </Container>
            </PageContainer>
        </ContainerCenter>
    )
}