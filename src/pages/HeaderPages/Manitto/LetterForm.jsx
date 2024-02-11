import styled from 'styled-components';
import sendManitoLetter from '../../../APIs/post/manito/sendManitoLetter';
import { useState } from 'react';

// 편지지 형태의 Form 스타일링
const LetterSendForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #fdf8e1; // 연한 크림색 배경
    padding: 2rem;
    box-shadow: 0 0 5px #ccc; // 가벼운 그림자 효과
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

// 편지 작성 TextArea 스타일링
const LetterSendTextArea = styled.textarea`
    width: 100%;
    height: 60%;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #fffae6; // 조금 더 연한 배경색
    border: 1px solid #ccc;
    font-family: 'Georgia', serif; // 클래식한 글꼴
    font-size: 16px;
    line-height: 1.5;
`

// 전송 버튼 스타일링
const SubmitButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #f4e4ba; // 연한 베이지 색
    border: none;
    border-radius: 5px;
    font-family: 'Georgia', serif;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e2d3a2; // 마우스 호버시 색 변경
    }
`

export default function LetterForm() {
    const [letterMessage, setLetterMessage] = useState("");

    const handleSubmit = async() => {
        try{
            await sendManitoLetter(letterMessage);
            alert('성공적으로 메시지가 전송되었습니다.');
        } catch {
            alert('메시지 전송에 실패하였습니다.');
        }
        
    }

    return (
        <LetterSendForm onSubmit={handleSubmit}>
            <LetterSendTextArea 
                placeholder="여기에 편지를 써주세요."
                onChange={(e) => {setLetterMessage(e.target.value)}}/>
            <SubmitButton type="submit">편지 보내기</SubmitButton>
        </LetterSendForm>
    );
}
