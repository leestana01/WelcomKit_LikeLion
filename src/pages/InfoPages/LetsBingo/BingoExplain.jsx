import styled from 'styled-components';
import StyledImg from '../../../Components/Container/CustomImg';

const InfoContainer = styled.div`
    width: 90%;
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

const CustomColumn = styled.div`
display: flex;
flex-direction: column;
gap: 80px;
`;

const Text = styled.a`
font-size: 25px;
line-height: 40px; /* 라인 높이 조정 */
padding-top: 2px; /* 위쪽에 약간의 패딩 추가 */
display: inline-block; /* display 속성 조정 */
color: white;
`;

const Detail = styled.a`
font-size: 25px;
margin: 5px;
background: linear-gradient(to bottom, #C8A96C, #7B5D28);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
line-height: 23px; /* 라인 높이 조정 */
padding-top: 2px; /* 위쪽에 약간의 패딩 추가 */
display: inline-block; /* display 속성 조정 */
`;

export default function Component() {

    return (
        <InfoContainer>
            <CustomColumn>
                <Text>예를 들어, 'Github 프로필 꾸미기'라는 미션이 있다면...</Text>

                <Detail>1. 이슈 생성이란?</Detail>
                <StyledImg src={'/img/img_exp1.png'} width='400px' height='100px' />
                <Text>issue 탭에서 글을 작성하고, 초록색 버튼을 누르면 issue가 생성됩니다.</Text>

                <Detail>2. 미션 수행 인증 화면?</Detail>
                <StyledImg src={'/img/img_exp2.png'} width='400px' height='100px' />
                <Text>꾸며진 Github 프로필을 캡쳐합니다.</Text>

                <Detail>3. 운영진 태그?</Detail>
                <StyledImg src={'/img/img_exp3.png'} width='400px' height='100px' />
                <Text>사진과 같이, @를 이용해 운영진을 태그합니다.</Text>

                <Detail>4. 미션 확인 후, 빙고 카운트?</Detail>
                <StyledImg src={'/img/img_exp4.png'} width='400px' height='100px' />
                <Text>운영진이 올바르게 미션이 수행된 것을 확인 후 회신합니다.</Text>

                <Detail>5. 어떤 미션이 있나요?</Detail>
                <Text>
                    - 동아리원 세명에게 자기소개하고 인증하기<br />
                    - 아기사자로 살아남는 방법에 대한 퀴즈<br />
                    - Github 계정 생성 후 본인 계정의 ReadMe 꾸미기<br />
                    - 30일 일일 커밋 달성하기<br />
                    - 운영진 n명 모두에게 빙고 도장 받기<br />
                </Text>

                <Text>전체 미션은 상단의 <Detail>빙고판 바로가기</Detail>버튼을 눌러,<br />
                    ReadMe에서 확인하실 수 있습니다.</Text>
            </CustomColumn>
        </InfoContainer>
    )
}