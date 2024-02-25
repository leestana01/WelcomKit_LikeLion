import styled from 'styled-components';

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
    width: 100%;
    min-width: 900px;
    height: 400px;
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

// const CustomRow = styled.div`
// display: flex;
// flex-direction: row;
// gap: 40px;
// `;

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
font-family: 'LINE-Bd';
line-height: 23px; /* 라인 높이 조정 */
padding-top: 2px; /* 위쪽에 약간의 패딩 추가 */
display: inline-block; /* display 속성 조정 */
color: white;
`;

const Ex = styled.a`
font-size: 15px;
line-height: 23px; /* 라인 높이 조정 */
color: #292E35;
text-align: center;
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
                                이 문화를 위해,
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

                        <MiniColumn>
                            <SemiTitle>3. 우리는 에러를 만났을 때 이렇게 질문해요.</SemiTitle>

                            <Text>
                                1. <Detail>목표로 하는 상황</Detail>을 알려주세요. <br />
                                <Ex>ex) Python으로 Hello World를 출력하고 싶어요 </Ex> <br />
                                2. <Detail>무엇을 시도했는지</Detail>알려주세요. <br />
                                <Ex>ex) printf('Hello World')를 실행했어요. </Ex> <br />
                                3. 결과와 에러를 알려주세요. <Detail>모든 에러 메시지</Detail>를 텍스트로 복사, 붙여넣기 해주세요. <br />
                                <Ex>ex) (터미널 또는 콘솔의 에러 텍스트를 ctrl v 후) 에러 메시지는 이렇게 보여요. </Ex> <br />
                                4. <Detail>개발환경</Detail>을 알려주세요. 버전, 디렉토리 구조 등 에러는 어디서든 일어날 수 있어요. <br />
                                <Ex>ex) Python은 3 버전이고, 디렉토리 구조는 다음과 같아요 (좌측 폴더 구조를 캡쳐 후 첨부 또는 말로 풀어서 설명) </Ex>
                            </Text>
                        </MiniColumn>

                        <MiniColumn>
                            <SemiTitle>4. 우리는 이런 규칙을 지키며 질문해요.</SemiTitle>

                            <Text>
                                1. 주저하지 말고, <Detail>사소한 질문이라도 꼭 질문</Detail>해요. 누구나 처음 시작하는 때가 있어요.<br />
                                2. 내가 궁금한 건 다른 사람도 궁금할 수 있어요.<Detail>DM보다는 질문 채널에 질문</Detail>해요.<br />
                                3. 나중에 또 확인할 수 있도록, <Detail>답변받은 질문을 삭제하는 것을 지양</Detail>해요.<br />
                                4. 너무너무 <Detail>급한 질문이라면, Gather Town으로</Detail> 방문하세요.운영진이 있다면 반갑게 답변해드릴게요.<br />
                            </Text>
                        </MiniColumn>
                    </CustomColumn>
                </Container>
            </PageContainer>
        </ContainerCenter>
    )
}