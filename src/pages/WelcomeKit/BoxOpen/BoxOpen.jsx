import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FullScreenVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

export default function Component () {
  const navigate = useNavigate();

  const handleEnded = () => {
    navigate('/main/welcomekit/boxopened');
  };

  return (
    <FullScreenVideo autoPlay onEnded={handleEnded}>
      <source src="/videos/boxopen.mp4" type="video/mp4" />
      브라우저가 동영상을 지원하지 않습니다. ㅜㅜ 크롬으로 접속해주세요!
    </FullScreenVideo>
  );
};