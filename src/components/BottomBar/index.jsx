/* eslint-disable no-unused-vars */
import styles from './styles.module.css'
import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faFire, faHeart } from '@fortawesome/free-solid-svg-icons'
 
// eslint-disable-next-line react/prop-types
export default function BottomBar ( ) {
    return (
        <div className={styles.containerBottom}>
        <div className={styles.itemsContainerBottom}>
        <Link to="/"><FontAwesomeIcon className={styles.bottomIcon} icon={faHome} /></Link>
        <Link to="/search"><FontAwesomeIcon className={styles.bottomIcon} icon={faSearch} /></Link>
        <a href=""><FontAwesomeIcon className={styles.bottomIcon} icon={faHeart} /></a>
        <a href=""><FontAwesomeIcon className={styles.bottomIcon} icon={faFire} /></a>
        </div>
        </div>
    )
}