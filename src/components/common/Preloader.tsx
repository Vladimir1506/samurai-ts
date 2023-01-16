import React from 'react';
import preloader from '../../assets/images/preloader.gif';
import classes from './Preloader.module.css'

const Preloader = () => {
    return (
        <div>
            <img className={classes.preloader} src={preloader} alt="Preloader"/>
        </div>
    );
};

export default Preloader;