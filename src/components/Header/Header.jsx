import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  console.log(props);
  return (
    <header className={style.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYE7BewC79Gd1f1iGCEjAe8ud21eRyNbxapSyJtvYPVZhaqHsM" alt="logo"
        className={style.logo} />
      <div className={style.loginWrapper}>
        <NavLink to={'/login'} className={style.loginLink}>{props.isAuth ? props.login : 'login' }</NavLink>
      </div>
    </header>
  );
}

export default Header;