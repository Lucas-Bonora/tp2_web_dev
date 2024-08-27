import React, { useReducer } from 'react';


const initialState = {
    name: 'João',
    age: 25,
};

// Definindo o reducer que vai gerenciar o estado
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_AGE':
            return {
                ...state,
                age: state.age + 1,
            };
        case 'DECREMENT_AGE':
            return {
                ...state,
                age: state.age - 1,
            };
        default:
            return state;
    }
};

const Exercise02 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>User Profile</h1>
            <p><strong>Nome:</strong> {state.name}</p>
            <p><strong>Idade:</strong> {state.age}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT_AGE' })} style={{ marginRight: '10px' }}>
                Incrementar Idade
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT_AGE' })}>
                Decrementar Idade
            </button>
        </div>
    );
};

export default Exercise02;
