import React from 'react';
import styled from 'styled-components';
import ContainerColumn from '../../../../Components/Container/ContainerColumn';
import NoticeBlue from '../../Components/NoticeBlue';
import UpdateManagerForm from './UpdateManagerForm';

const ContentContainer = styled(ContainerColumn)`
  gap: 20px;
`;

const NoticeUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export default function HandleManagers() {
    return (
        <ContentContainer>
            <NoticeBlue>
                <NoticeUl>
                    <li>운영진이 편성된 각 팀에는 무조건 1명의 팀장이 존재해야합니다. 팀장이 없거나 2명 이상일 수는 없습니다.</li>
                    <li>운영진이 없는 팀이 존재할 수는 있으나, 권장하지 않습니다.</li>
                </NoticeUl>
            </NoticeBlue>
            <UpdateManagerForm/>
        </ContentContainer>
    );
};
