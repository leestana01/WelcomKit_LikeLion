import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import TeammateForm from './TeammateForm';
import Teammate from './Teammate';
import { useEffect, useState } from 'react';
import getMyTeammates from '../../../APIs/get/getMyTeammates';
import partTypes from '../../../partType';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  width: 100%;
`

const PageContainer = styled(ContainerCenter)`
    justify-content: center;
    gap: 25px;
`

const LeaderCommentContainer = styled(ContainerCenter)`
    height: 7rem;
    width: 25rem;
    padding: 10px;
    color: black;

    border: 3px solid black;
    border-radius: 20px;
    background: white;
`

const TextH1 = styled.h1`
    font-size: 3rem;
    font-Family: LINE-Bd;
`
const TextH2 = styled.h2`
    font-size: 2rem;
    font-Family: LINE-Bd;
`
const TextP = styled.p`
`

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 30px;
`
export default function Component(){
    const [teammates, setTeammates] = useState({managers : [] , users : []});
    const [teamLeaderMessage, setTeamLeaderMessage] = useState('');

    useEffect(() => {
        const fetchTeammates = async () => {
            const response = await getMyTeammates();
            setTeammates(response);
            const teamLeader = response.managers.find(manager => manager.teamLeader);
            if (teamLeader) {
                setTeamLeaderMessage(teamLeader.teamLeaderMessage || "팀장의 메시지가 아직 없습니다.");
            }
        }
        fetchTeammates();
    }, [])

    return (
        <ContainerBackground $imgSrc={"/img/doctor_background.webp"}>
            <PageContainer>
                <TextP>카드에 마우스를 갖다 대보세요!</TextP>
                <TextH1>한 학기동안 팀을 이끌 운영진을 소개합니다</TextH1>
                <RowContainer>
                    {
                        teammates.managers.map((teammate, index) => (
                            <TeammateForm key={index}>
                                <Teammate
                                    $name={teammate.name}
                                    $img={teammate.imageUrl ? `${process.env.REACT_APP_SERVER}${teammate.imageUrl}` : ""}
                                    $dev={partTypes[teammate.part]}
                                    $description={teammate.teamMessage || "아직 팀 메시지가 입력되지 않음"}/>
                            </TeammateForm>
                        ))
                    }
                    <LeaderCommentContainer>
                        <TextH2>팀장의 한 마디</TextH2>
                        <TextP>{teamLeaderMessage}</TextP>
                    </LeaderCommentContainer>
                </RowContainer>
                
                <TextH1>같이 활동할 아기사자들이예요!</TextH1>
                <RowContainer>
                    {
                        teammates.users.map((teammate, index) => (
                            <TeammateForm key={index}>
                                <Teammate
                                $name={teammate.name}
                                $img={teammate.imageUrl ? `${process.env.REACT_APP_SERVER}${teammate.imageUrl}` : ""}
                                $dev={partTypes[teammate.part]}
                                $description={teammate.teamMessage || "아직 팀 메시지가 입력되지 않음"}/>
                            </TeammateForm>
                        ))
                    }
                </RowContainer>

            </PageContainer>
        </ContainerBackground>
    )
}