import styled from 'styled-components';

// 그라데이션과 화살표 스타일을 가진 버튼을 정의합니다.
export default styled.button`
    background: transparent; // 초기 배경은 투명
    border: none;
    color: #D1C294;
    cursor: pointer;
    height: 100%;
    position: relative;
    overflow: hidden; // 배경 그라데이션이 버튼을 벗어나지 않도록
    font-family: 'LINE-Bd', sans-serif;
    font-size: 25px;

    &.selected, &:hover {
        // 세로 그라데이션 효과
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
    }

    // 화살표 아이콘을 위한 스타일
    &.selected::after, &:hover::after {
        content: ''; // 화살표 아이콘은 이미지나 SVG로 대체 가능
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        width: 24px; // 화살표 크기 조정 필요
        height: 12px; // 화살표 크기 조정 필요
        background-image: url('img/arrow.png'); // 화살표 아이콘 이미지 경로
        background-size: cover;
    }
    `;