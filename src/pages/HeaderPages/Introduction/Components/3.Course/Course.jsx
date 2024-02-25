import styled from 'styled-components';
import Title from '../Title';
import ContainerColumn from '../../../../../Components/Container/ContainerColumn';
import { TextH1, TextP } from '../Text';
import ContainerRow from '../../../../../Components/Container/ContainerRow';

const Line = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;

    width: 90%;
    height: 2px;
    background-color: #FFA800;
    margin: 20px auto;
`;

const Circle = styled.div`
    width: 30px;
    height: 30px;

    top: -15px;
    border-radius: 50%;
    background-color: #FFA800;
    position: relative;
    z-index: 2;
`;

const Event = styled.a`
    flex: 1;
    font-family: 'LINE-Bd';
    line-height: 23px;
    padding-top: 2px;
    display: inline-block;
    color: white;
    text-align: center;
`;

export default function Course() {

    return (
        <ContainerColumn>
            <Title>아기사자로서의 1년 과정</Title>
            <TextH1>❐ 여러분이 가장 먼저 수행할 활동은 '미니 프로젝트' 입니다.</TextH1>
            <TextP>운영진과 아기사자가 골고루 섞여 팀이 구성되며,</TextP>
            <TextP>짧은 기간동안 완성할만한 간단한 아이디어를 프로그램으로 구현 후 발표하시게 됩니다.</TextP>

            <TextH1>❐ 미니 프로젝트 이후의 활동은 아래와 같습니다.</TextH1>

            <Line>
                {Array.from({ length: 7 }).map((_, index) => (
                    <Circle key={index} />
                ))}
            </Line>
            <ContainerRow>
                <Event>중간고사 기간<br />(정기세션 휴식)</Event>
                <Event>아이디어톤</Event>
                <Event>기말고사 기간<br />(정기세션 휴식)</Event>
                <Event>종강</Event>
                <Event>중앙 해커톤</Event>
                <Event>개강</Event>
                <Event>2학기 프로젝트<br />또는 스터디</Event>
            </ContainerRow>

            <br />
            <TextP>여러분은 위의 주요 행사와 정기세션을 병행하며 멋사를 활동하시게 됩니다!</TextP>

        </ContainerColumn>
    )
}