import React from 'react';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYE7BewC79Gd1f1iGCEjAe8ud21eRyNbxapSyJtvYPVZhaqHsM" alt="logo"
        className={style.logo} />
    </header>
  );
}

export default Header;