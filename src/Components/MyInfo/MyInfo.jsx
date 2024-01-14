import { styled } from 'styled-components';
import NameInfo from './Widgets/NameInfo';
import RoadMap from './Widgets/RoadMap';
import GuideBook from './Widgets/GuideBook';
import LetsGame from './Widgets/LetsBingo';
import Togather from './Widgets/Togather';

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    right: 0; // 오른쪽에 고정
    top: 0; // 상단에서부터 시작
    width: 250px; // 필요한 너비 설정

    height: calc(100vh - 3px);

    border-top : 3px solid #785A28;

    color: white;
    background: #0C1D27;

    position: fixed;
    height: 100vh; // 화면 높이만큼
`;

export default function Component() {
    return(
        <InfoContainer>
            <NameInfo/>
            <Togather />
            <RoadMap />
            <GuideBook />
            <LetsGame />
        </InfoContainer>
    )
};