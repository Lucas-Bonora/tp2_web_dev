import React, { useState, useMemo } from 'react';
import { faker } from '@faker-js/faker';

const generateData = () => {
    return Array.from({ length: 100 }, () => ({
        name: faker.person.fullName(),
        job: faker.person.jobTitle(),
    }));
};
const Exercise10 = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const data = useMemo(() => generateData(), []);

    const filteredData = useMemo(() => {
        return data.filter(({ name, job }) =>
            name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
            job.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
    }, [searchTerm, data]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Filtro de Nomes e Cargos</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Digite para filtrar"
                style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
            />
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {filteredData.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <strong>Nome:</strong> {item.name} <br />
                        <strong>Cargo:</strong> {item.job}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Exercise10;
