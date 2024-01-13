import styled from 'styled-components';

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 7rem;
    height: 30px;

    border: 3px solid transparent;
    border-image: linear-gradient(to bottom, #079692, #014A65) 1 stretch;

    padding: 5px;
    margin: 0 20px;
    font-size: 20px;

    color : white;
    background : #1E2328;
    cursor: pointer;

    &:hover{
        background: linear-gradient(to bottom, #1c252f, #103b50);
    }
`;