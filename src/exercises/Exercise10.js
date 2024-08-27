import React, { useState, useMemo } from 'react';
import { faker } from '@faker-js/faker';

// Gerando uma lista de 100 nomes completos e cargos
const generateData = () => {
    return Array.from({ length: 100 }, () => ({
        name: faker.person.fullName(),
        job: faker.person.jobTitle(),
    }));
};
const Exercise10 = () => {
    return (
        <div>
            <h1>Exercise10</h1>
            <p>Content for Exercise10</p>
        </div>
    );
};

export default Exercise10;
