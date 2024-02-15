import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ContainerRow from '../../../Components/Container/ContainerRow';
import ContainerColumn from '../../../Components/Container/ContainerColumn';

const flipAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;

//LetterForm의 스타일을 동적으로 업데이트하기 위해 props를 추가함
const LetterForm = styled(ContainerRow)`
    justify-content: start;
    gap: 2rem;

    width: calc(100% - 40px);
    height: ${(props) => (props.isFlipped ? '25vh' : '25vh')}; //isFlipped 상태에 따라 높이 조정 가능하게 만들어둠
    margin-right: 30px;
    background-color: #061627;
    border: 2px solid #372C16;
    padding: 10px;

    overflow: hidden;
    perspective: 1000px;
    transition: height 0.6s ease-in-out; //높이 변경에 애니메이션 적용(그나마 부드러워보이게)
    transform-style: preserve-3d;
`;

const LetterFlipper = styled.div`
    width: 100%;
    height: 100%;
    ${(props) =>
        props.isFlipped &&
        css`
            animation: ${flipAnimation} 0.6s forwards;
        `}
    transform-style: preserve-3d;
`;

const LetterFront = styled(ContainerColumn)`
    justify-content: start;
    gap: 2rem;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
`;

const LetterBack = styled.div`
    justify-content: center;
    gap: 2rem;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    color: white;
    position: absolute;
    width: 100%;
`;

export default function Letter({ $name, $part, $message, $src, $bigsrc }) {
    const [isFlipped, setIsFlipped] = useState(false);

    //useEffect를 사용하여 isFlipped 상태가 변경될 때마다 크기를 동적으로 조절하도록 설계

    return (
        <LetterForm onClick={() => setIsFlipped(!isFlipped)} isFlipped={isFlipped}>
            <LetterFlipper isFlipped={isFlipped}>
                <LetterFront>
                    <img src={$src || "/img/likelion_icon.png"} alt="Front" style={{ height: '100%', aspectRatio: '1 / 1' }} />
                    <div>
                        <p style={{ color: 'white', fontFamily: "'LINE-Bd', sans-serif", fontSize: '1.5rem' }}>{$name}</p>
                        <p>{$part}</p>
                    </div>
                </LetterFront>
                <LetterBack>
                    <p>{$message}</p>
                </LetterBack>
            </LetterFlipper>
        </LetterForm>
    );
}
