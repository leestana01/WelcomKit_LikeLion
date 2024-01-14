import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 220px; 
    height: 310px; 
    transition: all 0.1s;
    perspective: 350px;
`;

const Overlay = styled.div`
    position: absolute;
    width: 220px;
    height: 310px;
    background: linear-gradient(105deg, transparent 40%, rgba(255, 219, 112, 0.8) 45%, rgba(132, 50, 255, 0.6) 50%, transparent 54%);
    filter: brightness(1.1) opacity(${props => props.opacity});
    mix-blend-mode: color-dodge;
    background-size: 150% 150%;
    background-position: 100%;
    transition: all 0.1s;
`;

export default function Component({children}) {
  const [overlayStyle, setOverlayStyle] = useState({ opacity: 0 });
  const [containerStyle, setContainerStyle] = useState({});

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const rotateY = (-1/4 * offsetX) + 20;
    const rotateX = (9/40 * offsetY) - 20;

    setOverlayStyle({ 
      opacity: offsetX / 200,
      backgroundPosition: `${offsetX / 5 + offsetY / 5}%`
    });
    setContainerStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    });
  };

  const handleMouseOut = () => {
    setOverlayStyle({ opacity: 0 });
    setContainerStyle({});
  };

  return (
    <Container style={containerStyle} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      {children}
      <Overlay style={overlayStyle} />
    </Container>
  );
}
