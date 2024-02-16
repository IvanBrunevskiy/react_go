import React, { useState } from 'react';

const CreateUserForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // Ваш URL API для создания пользователя
        const apiUrl = 'http://localhost:8080/createuser';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': 'http://localhost:3000',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Пользователь успешно создан:', data);
            } else {
                console.error('Ошибка при создании пользователя:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при создании пользователя:', error);
        }
    };

    return (
        <div>
            <h1>Форма создания пользователя</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Логин:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Пароль:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Создать пользователя</button>
            </form>
        </div>
    );
};

export default CreateUserForm;