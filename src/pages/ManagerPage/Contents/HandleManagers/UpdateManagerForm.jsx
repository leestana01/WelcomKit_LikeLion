import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getManagersInfo from '../../../../APIs/get/getManagersInfo';
import updateTeamAndLeaderInfo from '../../../../APIs/put/updateTeamAndLeaderInfo';

const Table = styled.table`
    width: 30rem;
    border-collapse: collapse;
`;

const Th = styled.th`
    padding: 10px;
    border: 1px solid #ddd;
`;

const Td = styled.td`
    text-align: center;
    border: 1px solid #ddd;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Select = styled.select`
    // margin: 10px 0;
    width: 100%;
    border:none;
`;

const Button = styled.button`
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;
`;

const UpdateManagerForm = () => {
    const [managers, setManagers] = useState([]);
    const [selectedManager, setSelectedManager] = useState({});
    
    useEffect(() => {
        const fetchManagers = async () => {
            const response = await getManagersInfo();
            console.table(response);
            setManagers(response);
        };

        fetchManagers();
    }, []);

    const handleChange = (e, managerId) => {
        const { name, value } = e.target;
        setSelectedManager({
            ...selectedManager,
            [managerId]: { ...selectedManager[managerId], [name]: value },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updates = Object.entries(selectedManager).map(([managerId, changes]) => {
            const originalManager = managers.find(manager => manager.id === parseInt(managerId));
            if (!originalManager) {
                console.error(`${managerId} : 유저가 발견되지 않았습니다.`);
                return null;
            }
            const teamId = changes.teamId ? parseInt(changes.teamId) : originalManager.teamId;
            const isTeamLeader = changes.teamLeader ? changes.teamLeader === "true" : originalManager.teamLeader;
            
            return {
                id: originalManager.id,
                teamId: teamId,
                teamLeader: isTeamLeader,
            };
        }).filter(update => update !== null);

        console.table(updates);
        updateTeamAndLeaderInfo(updates);
        alert('업데이트 완료');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Table>
                <thead>
                    <tr>
                        <Th>이름</Th>
                        <Th>팀</Th>
                        <Th>팀장 여부</Th>
                    </tr>
                </thead>
                <tbody>
                    {managers.map((manager) => (
                        <tr key={manager.id}>
                            <Td>{manager.name}</Td>
                            <Td>
                                <Select
                                    name="teamId"
                                    value={selectedManager[manager.id]?.teamId || manager.teamId}
                                    onChange={(e) => handleChange(e, manager.id)}
                                >
                                    {[...Array(11).keys()].map((number) => (
                                        <option key={number} value={number}>{number === 0 ? "(없음)" : number}</option>
                                    ))}
                                </Select>
                            </Td>
                            <Td>
                                <Select
                                    name="teamLeader"
                                    value={selectedManager[manager.id]?.teamLeader || manager.teamLeader}
                                    onChange={(e) => handleChange(e, manager.id)}
                                >
                                    <option value="true">예</option>
                                    <option value="false">아니오</option>
                                </Select>
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button type="submit">업데이트</Button>
        </Form>
    );
};

export default UpdateManagerForm;
