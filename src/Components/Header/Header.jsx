import React  from 'react';
import styles from './Header.module.css'
import logo from './../../images/logo_2.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <div className={styles.header}>
        <img  src={logo} alt="logo"/>
        
        <div className = {styles.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'} >Login</NavLink>}
        </div>

    </div>
}

export default Header;