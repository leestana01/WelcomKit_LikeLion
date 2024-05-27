import { useEffect, useState } from 'react';
import styled from 'styled-components';
import getResultOfManitos from '../../../APIs/get/getResultOfManitos';

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: white;
    z-index: 2;
    width: 500px;
    height: 600px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    color: black;
`;

const Th = styled.th`
    background-color: #f4f4f4;
    padding: 8px;
    border: 1px solid #ddd;
`;

const Td = styled.td`
    text-align: center;
    padding: 8px;
    border: 1px solid #ddd;
    background-color: ${props => props.correct ? '#dc3545' : null};
`;


export default function ManittoModal({ onClose }) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const getResultInfo = async () => {
            const result = await getResultOfManitos();
            setResults(result);
        }
        getResultInfo();
    }, [])

    return (
        <>
            <Overlay onClick={onClose} />
            <Modal>
                <p>마니또 결과입니다.</p>
                <Table>
                    <thead>
                        <tr>
                            <Th>이름</Th>
                            <Th>마니또 To<br/>(=맞니또, 도와줄 사람)</Th>
                            <Th>마니또 From<br/>(=내 마니또)</Th>
                            <Th>정답 여부</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr key={index}>
                                <Td>{result.name}</Td>
                                <Td>{result.manitoTo}</Td>
                                <Td>{result.manitoFrom}</Td>
                                <Td correct={result.guessRight}>{result.guessRight ? "정답!" : "틀림"}</Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <button onClick={onClose}>닫기</button>
            </Modal>
        </>
    );
}