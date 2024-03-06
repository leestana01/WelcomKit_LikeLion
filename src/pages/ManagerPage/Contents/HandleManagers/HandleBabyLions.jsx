import React from 'react';
import styled from 'styled-components';
import ContainerColumn from '../../../../Components/Container/ContainerColumn';
import NoticeBlue from '../../Components/NoticeBlue';
import UpdateBabyLionForm from './UpdateBabyLionForm';

const ContentContainer = styled(ContainerColumn)`
  gap: 20px;
`;

const NoticeUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export default function HandleBabyLions() {
    return (
        <ContentContainer>
            <NoticeBlue>
                <NoticeUl>
                    <li>편의를 위해 운영진도 수정가능하게 변경하였습니다.</li>
                    <li>단, 운영진의 『팀』은 『운영진 관리』에서 변경해주세요! (팀장 오류 검토를 위함)</li>
                </NoticeUl>
            </NoticeBlue>
            <UpdateBabyLionForm/>
        </ContentContainer>
    );
};
