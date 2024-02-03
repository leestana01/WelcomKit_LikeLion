import styled from 'styled-components';
import ContainerRow from "../../../../Components/Container/ContainerRow";
import Profile from "./Profile";
import ProfileEditForm from "./ProfileEditForm";

const RowContainer = styled(ContainerRow)`
    justify-content: start;
    gap: 20px;
`

export default function MyInfo() {
    return (
        <RowContainer>
            <Profile/>
            <ProfileEditForm /> 
        </RowContainer>
    )
}