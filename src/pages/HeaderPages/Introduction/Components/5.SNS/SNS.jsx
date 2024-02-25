import styled from 'styled-components';
import Basic from "../../../../../Components/Buttons/Basic";
import Title from '../Title';
import ContainerColumn from '../../../../../Components/Container/ContainerColumn';
import { TextH1 } from '../Text';

const CustomRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
`;

export default function SNS(){

    const links = {
        'facebook' : "https://www.facebook.com/likelionhufs",
        'velog' : "https://velog.io/@hufsglobal09",
        'instagram' : "https://www.instagram.com/hufsglobal_likelion?igsh=eHpodjR2bjF0bzRn",
        'youtube' : "https://www.youtube.com/channel/UCYaDkwVaOhuoe_LuFr3lWkA"
    }

    const handleOnClick = (link) => {
        window.open(links[link], "_blank");
    }

    return(
        <ContainerColumn>
            <Title>한국외대 글로벌캠퍼스 멋쟁이사자처럼 12기의 SNS가 궁금해요.</Title>
            <TextH1>아래의 버튼을 누르면 멋사의 SNS로 바로 이동합니다.</TextH1>
            <CustomRow>
                <Basic text='멋사 FaceBook' $onClick={() => handleOnClick('facebook')} />
                <Basic text='멋사 Velog' $onClick={() => handleOnClick('velog')} />
                <Basic text='멋사 Instagram' $onClick={() => handleOnClick('instagram')} />
                <Basic text='멋사 Youtube' $onClick={() => handleOnClick('youtube')} />
            </CustomRow>
        </ContainerColumn>
    )
}