
import React from 'react'
import styles from './topBar.module.css'

function TopBar() {
    return (
        <div className={styles.top}>
            <div className={styles.topLeft}>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-pinterest-square"></i>
            <i class="fab fa-instagram-square"></i>
            </div>
            <div className={styles.topCenter}>
                <ul className={styles.topList}>
                    <li className={styles.topListItem}>Home</li>
                    <li className={styles.topListItem}>About</li>
                    <li className={styles.topListItem}>Write</li>
                    <li className={styles.topListItem}>Logout</li>
                </ul>
            </div>
            <div className={styles.topRight}>
                <img src="" alt="" className={styles.topImg}/>
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar 
