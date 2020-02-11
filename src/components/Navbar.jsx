import React from 'react';
import style from './../scss/components/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li><button className={style.button}>Profile</button></li>
        <li><button className={style.button}>Messages</button></li>
        <li><button className={style.button}>News</button></li>
        <li><button className={style.button}>Music</button></li>
        <li><button className={style.button}>Settings</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;