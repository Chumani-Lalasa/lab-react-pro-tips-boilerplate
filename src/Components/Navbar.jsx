import React from 'react';
// import './Navbar.css'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles['navbar']}>
        <div className={styles['logo-container']}>
            <Link to='/'>
                <img 
                    src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" 
                    alt=""
                    className={styles['logo']}
                    />
            </Link>
        </div>
        <div className={styles['nav-links-container']}>
            <ul>
                <h3>
                    <Link to='/contact' className={styles['link']}>Contact</Link>
                </h3>
                <h3>
                    <Link to='/register' className={styles['link']}>Register</Link>
                </h3>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
