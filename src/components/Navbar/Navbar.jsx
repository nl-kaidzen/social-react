import React from 'react';
import style from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li><NavLink to="/profile" className={style.button}>Profile</NavLink></li>
        <li><NavLink to="/messages" className={style.button}>Messages</NavLink></li>
        <li><NavLink to="/news" className={style.button}>News</NavLink></li>
        <li><NavLink to="/music" className={style.button}>Music</NavLink></li>
        <li><NavLink to="/settings" className={style.button}>Settings</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;