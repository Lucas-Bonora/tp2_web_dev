import React from "react";

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        case 'INCREMENT_AGE':
            return state.map((user, index) =>
                index === action.index
                    ? { ...user, age: user.age + 1 }
                    : user
            );
        case 'DECREMENT_AGE':
            return state.map((user, index) =>
                index === action.index
                    ? { ...user, age: user.age - 1 }
                    : user
            );
        default:
            return state;
    }
};

const Exercise03 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    // Função para adicionar um novo usuário
    const handleAddUser = () => {
        if (name && age) {
            dispatch({ type: 'ADD_USER', payload: { name, age: parseInt(age) } });
            setName('');
            setAge('');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Lista de Usuários</h1>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="number"
                    placeholder="Idade"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <button onClick={handleAddUser}>INSERIR</button>
            </div>

            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {state.map((user, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <strong>Nome:</strong> {user.name}, <strong>Idade:</strong> {user.age}
                        <div style={{ display: 'inline', marginLeft: '10px' }}>
                            <button onClick={() => dispatch({ type: 'INCREMENT_AGE', index })} style={{ marginRight: '5px' }}>
                                Incrementar Idade
                            </button>
                            <button onClick={() => dispatch({ type: 'DECREMENT_AGE', index })}>
                                Decrementar Idade
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Exercise03;
