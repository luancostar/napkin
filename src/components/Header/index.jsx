/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './styles.module.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function Header ({headerTitle, headerText, authorText, logoImg}) {
    const [isHidden, setIsHidden] = useState(false);
    const handleToggleHeader = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className={`${styles.backgroundHeader} ${isHidden && styles.hidden}`}>
        <h1 
        style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}} className={styles.titleBig}>
            {headerTitle}
            <img style={{width: '50px',
                opacity:'0.7'}}   src={logoImg} />
        </h1>
        <h1 className={styles.titleMid}>
            {headerText}
    
        </h1>
        <h1 className={styles.titleBigAuthor}>
            {authorText}
        </h1>
        
        <div className={styles.buttomHeader}>
        <button className={styles.buttomHeaderClick} onClick={handleToggleHeader}>
        <FontAwesomeIcon className={styles.bottomIcon} icon={faArrowUp} />
        </button>
        </div>
        </div>
    )
}