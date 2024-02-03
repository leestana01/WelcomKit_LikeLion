import React from 'react';
import styled from 'styled-components';

const ProfileCard = styled.div`
    position: relative;
    width: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const ProfileMiniImage = styled.div`
    position: absolute;
    top: 100px;
    
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid white;
    left: calc(50% - 50px);

    background-image: url(${props => props.$src});
    background-size: cover;
    background-position: center;
`;

const ProfileLargeImage = styled.div`
    width: 100%;
    height: 150px;
    background: black;

    background-image: url(${props => props.$src});
    background-size: cover;
    background-position: center;
`

const ProfileInfo = styled.div`
    padding: 70px 20px 20px 20px;
    background-color: white;
`;

const Name = styled.h2`
    margin: 0;
    color: #333;
`;

const Part = styled.h3`
    margin: 0;
    color: #777;
    font-weight: normal;
`;

const Quote = styled.p`
    font-style: italic;
    color: #999;
`;

export default function Profile(){

    const imageMiniUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%EB%A9%8B%EC%9F%81%EC%9D%B4%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC_%EB%A1%9C%EA%B3%A0.png/800px-%EB%A9%8B%EC%9F%81%EC%9D%B4%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC_%EB%A1%9C%EA%B3%A0.png";
    const imageLargeUrl = "https://blog.kakaocdn.net/dn/vQUdu/btqvTUJOpaD/F6l3qRXedNPB3mGNmmuOY1/img.png";

    return (
        <ProfileCard>
            <ProfileMiniImage $src={imageMiniUrl}/>

            <ProfileLargeImage $src={imageLargeUrl}/>
            <ProfileInfo>
            <Name>이수혁</Name>
            <Part>백엔드</Part>
            <Quote>
                "팀 메시지가 여기에 보여져야함. 팀 메시지가 여기에 보여져야함. 팀 메시지가 여기에 보여져야함. "
            </Quote>
            </ProfileInfo>

        </ProfileCard>
    )
}
  


