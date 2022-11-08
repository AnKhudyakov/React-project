import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div className="Posts">
      <h1>Страница для логина</h1>
      <form style={{ display: 'block' }} onSubmit={login}>
        <MyInput
          style={{ display: 'block' }}
          type="text"
          placeholder="Введите логин"
        ></MyInput>
        <MyInput
          style={{ display: 'block' }}
          type="password"
          placeholder="Введите пароль"
        ></MyInput>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
