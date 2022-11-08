import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <section className="navbar">
      <div className="navbar_content">
        <div className="navbar_links">
          <Link to="/posts">Каталог товаров</Link>
          <Link to="/about">О нас</Link>
          <Link to="/contacts">Контакты</Link>
        </div>
        <div className="navbar_btn">
          <MyButton onClick={logout}>Логин</MyButton>
          <MyButton onClick={logout}>Выйти</MyButton>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
