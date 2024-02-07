import styled from 'styled-components';
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

const Detail = styled.a`
background: linear-gradient(to bottom, #C8A96C, #7B5D28);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
line-height: 30px; /* 라인 높이 조정 */
padding-top: 2px; /* 위쪽에 약간의 패딩 추가 */
display: inline-block; /* display 속성 조정 */
`;

export default function Component() {

    return (
        <ContainerCenter>
            <PageContainer>
                <Container>
                    <CustomColumn>
                        <MiniColumn>
                            <Title>1. Gather Town</Title>
                            <StyledImg src={'/img/gather.png'} width='120px' height='100px' />
                            <Detail>
                                서식조건: 아기사자라면 누구나 언제든지 어디서든 이용 가능<br />
                                주의사항: 동시접속 가능한 최대인원은 20명
                            </Detail>
                        </MiniColumn>

                        <MiniColumn>
                            <Title>2. 멋쟁이사자처럼 스페이스 나이로비</Title>
                            <StyledImg src={'/img/icon_nyrovispace.png'} width='120px' height='100px' />
                            <Detail>
                                위치: 서울 특별시 강남구 테헤란로 443 애플트리타워 2층 멋쟁이사자처럼<br />
                                서식조건: 목요일 19시~22시, 일요일 10시~21시에만 운영진 1명 이상 동반하여 가능<br />
                                주의사항: 나이로비 대여 가이드라인을 필수적으로 숙지해야 함. 나이로비 대여 가이드라인은 사용하기 전 대표에게 문의<br />
                            </Detail>
                        </MiniColumn>

                        <MiniColumn>
                            <Title>3. 동아리방</Title>
                            <StyledImg src={'/img/icon_mario.png'} width='120px' height='100px' />
                            <Detail>
                                위치: 학생회관 413호<br />
                                서식조건: 상시(24시간)<br />
                                모현에 거주하는 아기사자들에게 적합<br />
                                동아리방에서 읽고싶은 책이 있다면 대표에게 문의
                            </Detail>
                        </MiniColumn>
                    </CustomColumn>
                </Container>
            </PageContainer>
        </ContainerCenter>
    )
}