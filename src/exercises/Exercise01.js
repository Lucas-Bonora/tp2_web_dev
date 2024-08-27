import React from "react";

const Exercise01 = () => {

    const [user, setUser] = useState({
        name: 'João',
        age: 25,
    });

    const incrementAge = () => {
        setUser((prevState) => ({
            ...prevState,
            age: prevState.age + 1,
        }));
    };

    const decrementAge = () => {
        setUser((prevState) => ({
            ...prevState,
            age: prevState.age - 1,
        }));
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>User Profile</h1>
            <p><strong>Nome:</strong> {user.name}</p>
            <p><strong>Idade:</strong> {user.age}</p>
            <button onClick={incrementAge} style={{ marginRight: '10px' }}>
                Incrementar Idade
            </button>
            <button onClick={decrementAge}>
                Decrementar Idade
            </button>
        </div>
    );
};

export default Exercise01;