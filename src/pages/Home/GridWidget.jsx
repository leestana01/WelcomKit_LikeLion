import styled from 'styled-components';

// 그리드 레이아웃을 위한 컨테이너
const GridContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr; // 행을 두 개로 분할
    grid-template-columns: 1fr; // 열은 한 개
    grid-gap: 10px; // 그리드 사이 간격
    height: 50vh; // 뷰포트 높이에 맞춤
`;

// 각 그리드 아이템
const GridItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray; // 배경색 설정
    border: 1px solid black; // 테두리 설정

    position: relative;
`;

// 하단 그리드 아이템들을 위한 컨테이너
const BottomGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; // 두 개의 열 생성
    grid-gap: 10px;
    height: 100%;
`;

const GridImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
`

const GirdText = styled.p`
    position: absolute;
    left: 0;
    bottom: 0;

    color: ${props => props.$color};
    font-family: 'LINE-Bd', sans-serif;
    font-size: ${props => props.$font_size || "1.5rem"};
`

export default function Component() {
  return (
    <GridContainer>
      <GridItem>
        <GridImg src="img/Growl_to_Growth_banner.png"/>
        <GirdText>11기 출신 운영진이 환영합니다</GirdText>
      </GridItem>
      <BottomGrid>
        <GridItem>
            <GridImg src="img/techit.png"/>
            <GirdText $font_size="1.2rem">테킷 강의 무료제공</GirdText>
        </GridItem>
        <GridItem>
            <GridImg src="img/gmail.png"/>
            <GirdText $color="darkorange" $font_size="1.2rem">전용 메일 발급</GirdText>
        </GridItem>
      </BottomGrid>
    </GridContainer>
  );
}
