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

    width: calc(100% - 45px);
    height: 150px;
    margin-right: 30px;
    background-color: #061627;
    border: 2px solid #372C16;
    padding: 20px;

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
    justify-content: space-between;
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

const TextForm = styled(ContainerColumn)`
    justify-content: start;
    gap: 2rem;
    height: 100%;
    display: flex;
    flex: 2;
`

const GridImg = styled.img`
    height: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    flex: 1;
`

const GirdText = styled.p`
    color: ${props => props.$color};
    font-family: 'LINE-Bd', sans-serif;
    font-size: ${props => props.$font_size || "1.5rem"};
`

export default function Letter({ $name, $part, $message, $src }) {
    const [isFlipped, setIsFlipped] = useState(false);

    //useEffect를 사용하여 isFlipped 상태가 변경될 때마다 크기를 동적으로 조절하도록 설계

    return (
        <LetterForm onClick={() => setIsFlipped(!isFlipped)} isFlipped={isFlipped}>
            <LetterFlipper isFlipped={isFlipped}>
                <LetterFront>

                    <GridImg src={"/img/cover.png"} />
                </LetterFront>
                <LetterBack>
                    <GridImg src={$src || "/img/likelion_icon.png"} />
                    <TextForm>
                        <div>
                            <GirdText>{$name}</GirdText>
                            <p>{$part}</p>
                        </div>
                        <div>
                            <p>{$message}</p>
                        </div>
                    </TextForm>
                </LetterBack>
            </LetterFlipper>
        </LetterForm>
    );
}
