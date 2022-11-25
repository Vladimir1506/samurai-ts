import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/profile'}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/dialogs'}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/news'}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/music'}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/settings'}>Settings</NavLink>
            </div>
        </div>
    )
}
export default Navbar