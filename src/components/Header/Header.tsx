import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderContainerType} from './HeaderContainer';

type HeaderPropsType = HeaderContainerType
const Header = ({login, isAuth}: HeaderPropsType) => {
    debugger
    return (
        <header className={classes.header}>
            <img
                src="https://i.pinimg.com/originals/1e/12/bb/1e12bbe85660b243513671b120edd849.png"
                alt="Миньоны"/>
            <div className={classes.loginBlock}>
                {isAuth ? login : <NavLink to={'/login'}>{isAuth ? login : 'Login'}</NavLink>}
            </div>
        </header>
    )
}
export default Header