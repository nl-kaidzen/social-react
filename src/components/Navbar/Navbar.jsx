import React from 'react';
import style from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import FriendItem from './FriendItem/FriendList';

const Navbar = (props) => {
  let friendListElements = props.friends.map((friend) => {
    return(
      <FriendItem name={friend} />
    );
  });

  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li><NavLink to="/profile" className={style.button}>Profile</NavLink></li>
        <li><NavLink to="/messages" className={style.button}>Messages</NavLink></li>
        <li><NavLink to="/users" className={style.button}>Users</NavLink></li>
        <li><NavLink to="/music" className={style.button}>Music</NavLink></li>
        <li><NavLink to="/settings" className={style.button}>Settings</NavLink></li>
      </ul>

      <ul className={style.friendList}>
        {friendListElements}
      </ul>
    </nav>
  );
}

export default Navbar;