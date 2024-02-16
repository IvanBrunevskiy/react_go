import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CreateUserForm from './CreateUserForm';
import LoginForm from './LoginForm';

const Home = () => (
    <div>
        <h1>Добро пожаловать на главную страницу!</h1>
        {/* Здесь вы можете добавить ссылки на другие страницы */}
        <Link to="/create-user">Перейти к форме создания пользователя</Link>
        <br />
        <Link to="/login">Перейти к форме входа</Link> {/* Добавьте ссылку на страницу логина */}
    </div>
);

const App = () => (
    <Router>
        <div>
            {/* Добавьте навигацию для перехода между страницами */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/create-user">Создать пользователя</Link>
                    </li>
                    <li>
                        <Link to="/login">Войти</Link> {/* Добавьте ссылку на страницу логина */}
                    </li>
                </ul>
            </nav>

            {/* Используйте Routes для рендеринга маршрутов */}
            <Routes>
                <Route path="/create-user" element={<CreateUserForm />} />
                <Route path="/login" element={<LoginForm />} /> {/* Добавьте маршрут для страницы логина */}
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    </Router>
);

export default App;