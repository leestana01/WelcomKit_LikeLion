import styled from 'styled-components';

const NoticeContainer = styled.div`
    display: flex;
    height: 60px;
`

const LeftBar = styled.div`
    width: 5px;
    background: #50abbd;
`
const MainBar = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;

    padding: 0 1rem;

    background: #cff4fc;
    color: #055160;
`

export default function NoticeBlue({children}) {
    return(
        <NoticeContainer>
            <LeftBar/>
            <MainBar>
                {children}
            </MainBar>
        </NoticeContainer>
    )
}