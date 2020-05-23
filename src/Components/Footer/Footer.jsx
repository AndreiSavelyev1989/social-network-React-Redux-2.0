import  React  from 'react';
import styles from './Footer.module.css'
import logo from './../../images/logo.png'

const Footer = () => {
    return <div className={styles.footer}>
        <img  src={logo} alt="logo"/>
    </div>
}

export default Footer;