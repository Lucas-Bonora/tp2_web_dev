import React, { useReducer, useState } from 'react';

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'REMOVE_TASK':
            return state.filter((_, index) => index !== action.index);
        default:
            return state;
    }
};
const Exercise05 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task) {
            dispatch({ type: 'ADD_TASK', payload: task });
            setTask('');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>TO DO LIST</h1>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Nova Tarefa"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <button onClick={handleAddTask}>Adicionar Tarefa</button>
            </div>

            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {state.map((task, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {task}
                        <button
                            onClick={() => dispatch({ type: 'REMOVE_TASK', index })}
                            style={{ marginLeft: '10px', color: 'red' }}
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Exercise05;