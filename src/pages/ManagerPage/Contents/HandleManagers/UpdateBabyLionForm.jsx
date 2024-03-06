import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getBabyLionsInfo from '../../../../APIs/get/getBabyLionsInfo';
import { putBabyLionInfo } from '../../../../APIs/put/updateUserInfo';
import partTypes from '../../../../partType';

const Table = styled.table`
    width: 50rem;
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

const Input = styled.input`
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border: 0;
`;

const Button = styled.button`
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;
`;


// 변수명 manager -> babylion으로 바꾸려고 했는데 너무 많아서 귀찮아서 포기
const UpdateBabyLionForm = () => {
    const [babylions, setBabyLions] = useState([]);
    const [selectedManager, setSelectedManager] = useState({});
    
    useEffect(() => {
        const fetchBabyLions = async () => {
            const response = await getBabyLionsInfo();
            console.table(response);
            setBabyLions(response);
        };

        fetchBabyLions();
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
            const originalData = babylions.find(manager => manager.id === parseInt(managerId));
            if (!originalData) {
                console.error(`${managerId} : 유저가 발견되지 않았습니다.`);
                return null;
            }
            const teamId = changes.teamId ? parseInt(changes.teamId) : originalData.teamId;
            const partType = changes.partType ? changes.partType : originalData.partType;
            const department = changes.department ? changes.department : originalData.department;
            
            return {
                id: originalData.id,
                teamId: teamId,
                partType: partType,
                department: department,
            };
        }).filter(update => update !== null);

        console.table(updates);
        await putBabyLionInfo(updates);
        alert('업데이트 완료');
        window.location.reload();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Table>
                <thead>
                    <tr>
                        <Th>이름</Th>
                        <Th>팀</Th>
                        <Th>파트</Th>
                        <Th>학과</Th>
                    </tr>
                </thead>
                <tbody>
                    {babylions.map((manager) => (
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
                                    name="partType"
                                    value={selectedManager[manager.id]?.partType || manager.partType}
                                    onChange={(e) => handleChange(e, manager.id)}
                                >
                                    {Object.entries(partTypes).map(([key, value]) => (
                                        <option key={key} value={key}>{value}</option>
                                    ))}
                                </Select>
                            </Td>
                            <Td>
                                <Input
                                    name="department"
                                    placeholder="학과 입력"
                                    value={selectedManager[manager.id]?.department || manager.department}
                                    onChange={(e) => handleChange(e, manager.id)}
                                />
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button type="submit">업데이트</Button>
        </Form>
    );
};

export default UpdateBabyLionForm;
