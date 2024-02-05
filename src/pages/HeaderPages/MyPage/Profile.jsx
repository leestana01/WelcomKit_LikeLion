import React, { useRef } from 'react';
import styled from 'styled-components';
import { updateProfileImage, updateProfileMiniImage } from '../../../APIs/post/updateProfileImage';
import partType from '../../../partType';

const ProfileCard = styled.div`
    position: relative;
    width: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const imageHoverStyle = `
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

const ProfileLargeImage = styled.div`
    width: 100%;
    height: 150px;
    background: black;

    background-image: url(${props => props.$src});
    background-size: cover;
    background-position: center;
    ${imageHoverStyle}
`

const ProfileMiniImage = styled.div`
    position: absolute;
    top: 100px;
    
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid white;
    left: calc(50% - 50px);

    background-image: url(${props => props.$src});
    background-size: 100% 100%;
    background-position: center;
    ${imageHoverStyle}
`;

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

export default function Profile({$large, $mini, $name, $part, $message}){
    const miniInputRef = useRef(null);
    const largeInputRef = useRef(null);

    const handleLargeImageChange = async (event) => {
        const file = event.target.files[0];
        await updateProfileImage(file)
            .then(() => window.location.reload());
    };

    const handleMiniImageChange = async (event) => {
        const file = event.target.files[0];
        await updateProfileMiniImage(file)
            .then(() => window.location.reload());
    };


    return (
        <ProfileCard>
            <input type="file" ref={largeInputRef} style={{ display: 'none' }} accept="image/*" onChange={handleLargeImageChange} />
            <ProfileLargeImage $src={$large} onClick={() => largeInputRef.current.click()} />

            <input type="file" ref={miniInputRef} style={{ display: 'none' }} accept="image/*" onChange={handleMiniImageChange} />
            <ProfileMiniImage $src={$mini} onClick={() => miniInputRef.current.click()} />

            <ProfileInfo>
            <Name>{$name}</Name>
            <Part>{partType[$part]}</Part>
            <Quote>
                {$message || "팀 메시지를 입력해주세요"}
            </Quote>
            </ProfileInfo>

        </ProfileCard>
    )
}
  


