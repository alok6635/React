import React from "react";
import styles from './navbar.module.css'

const NavBar=(props)=> {
  const {cartCount} =  props;
      return (
      <>
      <div className={styles.nav}>
      <div className={styles.title}>MOVIE APP</div>
        <div className={styles.cartIconContainer}>
            <img className={styles.cartIcon} 
                 alt="Cart-Icon" 
                 src = "https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
            <span className ={styles.cartCount}>{cartCount}</span>
        </div>
      </div>
      </>
      )
    }
  export default NavBar;
  