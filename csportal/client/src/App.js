import React, { useState, useEffect } from 'react';

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api')
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>React + Node.js App</h1>
            <p>{message}</p>
        </div>
    );
};

export default App;
