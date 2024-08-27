import React, { useState, useMemo } from 'react';

const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};

const Exercise07 = () => {
    const [number, setNumber] = useState('');

    const factorialResult = useMemo(() => factorial(parseInt(number)), [number]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Calculadora de Fatorial</h1>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Digite um número"
                style={{ marginBottom: '20px' }}
            />
            <p>Fatorial: {number ? factorialResult : 'Digite um número válido'}</p>
        </div>
    );
};
export default Exercise07;
