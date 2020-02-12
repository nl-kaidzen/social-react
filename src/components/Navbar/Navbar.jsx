import React from 'react';
import style from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li><a href="/profile" className={style.button}>Profile</a></li>
        <li><a href="/messages" className={style.button}>Messages</a></li>
        <li><a href="/news" className={style.button}>News</a></li>
        <li><a href="/music" className={style.button}>Music</a></li>
        <li><a href="/settings" className={style.button}>Settings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;