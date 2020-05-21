import  React  from 'react';
import  styles  from './Navbar.module.css';

const Navbar = () => {
    return <div className={styles.navbar}>
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
    </div>
}

export default Navbar;