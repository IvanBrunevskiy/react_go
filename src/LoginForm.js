import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // Ваш URL API для логина пользователя
        const apiUrl = 'http://localhost:8080/login';

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
                console.log('Пользователь успешно вошел:', data);
                // Здесь вы можете обработать успешный вход и, возможно, перенаправить пользователя
            } else {
                console.error('Ошибка при входе пользователя:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при входе пользователя:', error);
        }
    };

    return (
        <div>
            <h1>Форма входа</h1>
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
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default LoginForm;