import styles from './styles.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookmark, faSearch, faFire } from '@fortawesome/free-solid-svg-icons'
 
// eslint-disable-next-line react/prop-types
export default function BottomBar ( ) {
    return (
        <div className={styles.containerBottom}>
        <div className={styles.itemsContainerBottom}>
        <a href=""><FontAwesomeIcon className={styles.bottomIcon} icon={faHome} /></a>
        <a href=""><FontAwesomeIcon className={styles.bottomIcon} icon={faSearch} /></a>
        <a href=""><FontAwesomeIcon className={styles.bottomIcon} icon={faBookmark} /></a>
        <a href=""><FontAwesomeIcon className={styles.bottomIcon} icon={faFire} /></a>
        </div>
        </div>
    )
}