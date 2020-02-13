import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.scss';

const DialogItem = (props) => {
    return(
        <li>
            <NavLink to={`/messages/${props.id}`} className={style.dialogsItem}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;