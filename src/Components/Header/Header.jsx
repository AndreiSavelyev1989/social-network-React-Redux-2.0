import React  from 'react';
import styles from './Header.module.css'
import logo from './../../images/logo_2.png'

const Header = (props) => {
    return <div className={styles.header}>
        <img  src={logo} alt="logo"/>
    </div>
}

export default Header;