import styled from 'styled-components';
import LetterList from './LetterList'; // LetterList 컴포넌트 임포트

const MyLettersContainer = styled.div`
    padding: 2rem;
    height: 100%;
    max-width: 400px;
    background-color: #f4e4ba;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    font-family: 'Georgia', serif; // 전체적으로 빈티지한 폰트 적용
`;

const Title = styled.h2`
    font-family: 'Georgia', serif;
    color: #333;
    text-align: center;
`;

const CautionMessage = styled.p`
    font-family: 'Arial', sans-serif;
    color: #666;
    font-size: 14px;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export default function MyLetters() {
    return (
        <MyLettersContainer>
            <Title>내가 쓴 편지 모음</Title>
            <LetterList $max_height="200px" $letterType="mine"/>
            <CautionMessage>
                작성한 편지는 수정/삭제가 불가하오니, 미풍양속에 어긋나지 않게 작성해 주시기 바랍니다.
            </CautionMessage>
        </MyLettersContainer>
    );
}
