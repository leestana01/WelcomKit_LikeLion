import styled from 'styled-components';

const Card = styled.div`
    position: absolute;

    display: flex;
    width: 220px; height: 290px;
    padding: 10px 0;
    flex-direction: column;
    align-items: center;

    border: 3px solid black;
    border-radius: 10px;
    color: black;
    background : #BCCCEA;
    background-size: cover;
`;

const ProfileName = styled.p`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`

const ProfileImage = styled.img`
    width: 100%; height: 150px;
`

const ProfileDevContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width:100%;
    color: white;
    height: 1.5rem;
    background: linear-gradient(105deg, #000520, #68caf1 30%, #000520);
`
const ProfileDev = styled.p`
`

const ProfileDescription = styled.p`
`

export default function Component({$name,$img,$dev,$description}) {
    return (
        <Card>
            <ProfileName>{$name}</ProfileName>
            <ProfileImage src={$img || "/img/likelion_background.png"}/>
            <ProfileDevContainer>
                <ProfileDev>{$dev}</ProfileDev>
            </ProfileDevContainer>
            <ProfileDescription>{$description}</ProfileDescription>
        </Card>
    )
}