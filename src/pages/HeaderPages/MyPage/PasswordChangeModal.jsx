import React, { useState } from 'react';
import styled from 'styled-components';
import updatePassword from '../../../APIs/post/updatePassword';

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    width: 350px;
    padding: 20px;
    border-radius: 8px;
    background-color: white;
`;

const Input = styled.input`
    display: block;
    margin-bottom: 10px;

    width: calc(100% - 20px);
    padding: 10px;
`;

const Button = styled.button`
    margin-right: 10px;
`;

const TextTitle = styled.h1`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`

export default function PasswordChangeModal({ isOpen, onClose }) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        handlePasswordChange(password);
    };
    
    const handlePasswordChange = async (password) => {
        try {
            await updatePassword(password);
            alert('비밀번호가 변경되었습니다.');
        } catch (error) {
            alert('비밀번호 변경에 실패했습니다.');
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <ModalBackground>
            <ModalContainer>
                <TextTitle>비밀번호 변경</TextTitle>
                <p>비밀번호는 HS256 해시 암호로 안전하게 저장되며,</p>
                <p>복호화가 불가합니다.</p>
                <Input type="password" placeholder="새 비밀번호 입력" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Button onClick={handleSubmit}>변경</Button>
                <Button onClick={onClose}>취소</Button>
            </ModalContainer>
        </ModalBackground>
    );
}
