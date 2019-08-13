import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxx/Aux';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];      // for closing sideDrawer
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.open];       // for opening sideDrawer
    } 

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav> 
             </div>
        </Aux>
        
    );
};

export default sideDrawer;