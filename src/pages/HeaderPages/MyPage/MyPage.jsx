import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import Profile from './Profile';
import ProfileEditForm from './ProfileEditForm';
import ContainerRow from '../../../Components/Container/ContainerRow';
import { useEffect, useState } from 'react';
import getMyPageInfo from '../../../APIs/get/getMyPageInfo';
import PasswordChangeModal from './PasswordChangeModal';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: black;
    width: calc(100% - 40px);
    padding: 20px;
`

const RowContainer = styled(ContainerRow)`
    gap: 20px;
`

const ButtonContainer = styled(ContainerRow)`
    justify-content: end;
`

const SubmitButton = styled.button`
    width: 10rem;
    height: 50px;
    padding: 10px;

    border: none;
    border-radius: 4px;
    background-color: green;

    color: white;
    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
`;

export default function MyPage(){
    const [myPageInfo, setMyPageInfo] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <ContainerBackground><PageContainer>
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
                    $teamId={myPageInfo.teamId}
                    $part={myPageInfo.part}
                    $department={myPageInfo.department}
                    $teamMessage={myPageInfo.teamMessage}
                />
            </RowContainer>
            <ButtonContainer>
                <SubmitButton onClick={() => setIsModalOpen(true)}>비밀번호 변경</SubmitButton>
            </ButtonContainer>
            <PasswordChangeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </PageContainer></ContainerBackground>
    )
}