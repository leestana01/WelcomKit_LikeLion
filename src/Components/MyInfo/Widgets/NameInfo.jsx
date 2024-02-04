import styled from 'styled-components';
import myInfo from '../../../APIs/get/myInfo';
import { useEffect, useState } from 'react';

const NameInfoContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    height: 80px;
`

const RoundDiv = styled.div`
    width: 40px;
    height: 40px;
    padding: 10px;

    border : 3px solid orange;
    border-radius : 50%;

    background-image: url(${props => props.$url});
    background-repeat: no-repeat;
    // background-size : contain 또는 cover
    background-size : 100% 100%;
    background-position : center;
`

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 40px;
`

const StyledName = styled.h1`
    font-size: 1.5rem;
`
const NameDescription = styled.p`
    color: #08A45D;
`


export default function NameInfo(){
    const [name, setName] = useState();
    const [userType, setUserType] = useState();
    const [profileUrl, setProfileUrl] = useState();
    // const [image, setImage] = useState();

    const roleType = {
        'ROLE_USER': '신규 아기 사자',
        'ROLE_MANAGER': '운영진',
        'ROLE_BOSS': '회장',
        'ROLE_ADMIN': '관리자'
    }

    useEffect(() => {
        const fetchMyInfo = async () => {
            const data = await myInfo();
            if (data) {
                setName(data.name);
                setUserType(data.userType);
                setProfileUrl(data.profileMiniUrl);
            }
        };
        fetchMyInfo();
    }, []);

    return(
        <NameInfoContainer>
            <RoundDiv $url={ profileUrl ? `${process.env.REACT_APP_SERVER}${profileUrl}` : '/img/likelion_icon.png'} />
            <NameContainer>
                <StyledName>{name}</StyledName>
                <NameDescription>{roleType[userType]}</NameDescription>
            </NameContainer>

        </NameInfoContainer>
    )

}