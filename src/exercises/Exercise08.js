import React, { useState, useMemo } from 'react';
import { faker } from '@faker-js/faker';

const generateNames = () => {
    return Array.from({ length: 100 }, () => faker.person.fullName());
};

const Exercise08 = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const names = useMemo(() => generateNames(), []);

    const filteredNames = useMemo(() => {
        return names.filter(name =>
            name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
    }, [searchTerm, names]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Filtro de Nomes</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Digite para filtrar"
                style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
            />
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {filteredNames.map((name, index) => (
                    <li key={index} style={{ marginBottom: '5px' }}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Exercise08;