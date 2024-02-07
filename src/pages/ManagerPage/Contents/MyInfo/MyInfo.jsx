import styled from 'styled-components';
import ContainerRow from "../../../../Components/Container/ContainerRow";
import Profile from "./Profile";
import ProfileEditForm from "./ProfileEditForm";
import { useEffect, useState } from 'react';
import getMyPageInfo from '../../../../APIs/get/getMyPageInfo';

const RowContainer = styled(ContainerRow)`
    justify-content: start;
    gap: 20px;
`

export default function MyInfo() {
    const [myPageInfo, setMyPageInfo] = useState({});

    const defaultMiniUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%EB%A9%8B%EC%9F%81%EC%9D%B4%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC_%EB%A1%9C%EA%B3%A0.png/800px-%EB%A9%8B%EC%9F%81%EC%9D%B4%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC_%EB%A1%9C%EA%B3%A0.png";
    const defaultLargeUrl = "https://blog.kakaocdn.net/dn/vQUdu/btqvTUJOpaD/F6l3qRXedNPB3mGNmmuOY1/img.png";

    useEffect(() => {
        const fetchMyPage = async () => {
            const response = await getMyPageInfo();
            setMyPageInfo(response);
        }
        fetchMyPage();
    },[])

    return (
        <RowContainer>
            <Profile 
                $large={myPageInfo.profileUrl ? `${process.env.REACT_APP_SERVER}${myPageInfo.profileUrl}` : defaultLargeUrl} 
                $mini={myPageInfo.profileMiniUrl ? `${process.env.REACT_APP_SERVER}${myPageInfo.profileMiniUrl}` : defaultMiniUrl}
                $name={myPageInfo.name}
                $part={myPageInfo.part}
                $message={myPageInfo.teamMessage}
            />
            <ProfileEditForm 
                $name={myPageInfo.name}
                $isTeamLeader={myPageInfo.teamLeader}
                $teamId={myPageInfo.teamId}
                $part={myPageInfo.part}
                $department={myPageInfo.department}
                $teamMessage={myPageInfo.teamMessage}
                $teamLeaderMessage={myPageInfo.teamLeaderMessage}
            /> 
        </RowContainer>
    )
}