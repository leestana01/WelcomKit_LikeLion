import styled from 'styled-components';
import ContainerBackground from '../../../Components/Container/ContainerBackground';
import TeammateForm from './TeammateForm';
import Teammate from './Teammate';

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

    return (
        <ContainerBackground $imgSrc={"/img/doctor_background.webp"}>
            <PageContainer>
                <TextP>카드에 마우스를 갖다 대보세요!</TextP>
                <TextH1>한 학기동안 팀을 이끌 운영진을 소개합니다</TextH1>
                <RowContainer>
                    {
                        [1,2].map((person) => {
                            return (
                                <TeammateForm>
                                    <Teammate
                                        $name={"이수혁"}
                                        $img={""}
                                        $dev={"백엔드"}
                                        $description={"  대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 "}/>
                                </TeammateForm>
                            )
                        })
                    }
                    <LeaderCommentContainer>
                        <TextH2>팀장의 한 마디</TextH2>
                        <TextP>{" 대충 설명 대충 설명 대충 설명 대충 설명 대충 설명 대충 설명 대충 설명 대충 설명 대충 설명 대충 설명 "}</TextP>
                    </LeaderCommentContainer>
                </RowContainer>
                
                <TextH1>같이 활동할 아기사자들이예요!</TextH1>
                <RowContainer>
                    {
                        [1,2,3,4].map((person) => {
                            return (
                                <TeammateForm>
                                    <Teammate
                                        $name={"이수혁"}
                                        $img={""}
                                        $dev={"백엔드"}
                                        $description={"  대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 대충 자기 소개 "}/>
                                </TeammateForm>
                            )
                        })
                    }
                </RowContainer>

            </PageContainer>
        </ContainerBackground>
    )
}