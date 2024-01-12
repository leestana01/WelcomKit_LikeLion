import styled from 'styled-components';

export default styled.div`
    width: calc(100% - 250px);
    height: calc(100vh - 83px);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5); // 검은색 오버레이 추가
        background-blend-mode: darken; // 이미지와 오버레이 혼합 모드 설정
        background-image: url('img/likelion_background.png'); // 배경 이미지 경로
        background-size: cover;
        opacity: 0.8; // 투명도 조정으로 어두운 효과
        z-index: -1; // div 내용이 위로 오도록
    }
    `;
