import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
    
    return <div className={styles.navbar}>
        <div><NavLink to={'/profile'} activeClassName={styles.activeLink}>Profile</NavLink></div>
        <div><NavLink to={'/dialogs'} activeClassName={styles.activeLink}>Messages</NavLink></div>
        <div><NavLink to={'/news'} activeClassName={styles.activeLink}>News</NavLink></div>
        <div><NavLink to={'/music'} activeClassName={styles.activeLink}>Music</NavLink></div>
        <div><NavLink to={'/settings'} activeClassName={styles.activeLink}>Settings</NavLink></div>
        <div className={styles.friends}>
            <Friends friends={props.state.friends}/>
        </div>
    </div>
}

export default Navbar;