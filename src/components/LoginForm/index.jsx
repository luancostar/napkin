/* eslint-disable no-unused-vars */
import styles from './styles.module.css'
import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookmark, faSearch, faFire } from '@fortawesome/free-solid-svg-icons'
 
// eslint-disable-next-line react/prop-types
export default function LoginForm ( ) {
    return (
         <>
        <div className={styles.container}>
        <div className={styles.formContainer}>
            <form 
            style={{display: 'grid',
            gap: '1rem',
            padding: '1rem'}}
            action=""
            >
            <input className={styles.inputForm} type="email" />
            <input className={styles.inputForm} type="password" />
          <button className={styles.buttonForm}>Entrar</button>
            </form>
        </div>
        </div>
         </>
    )
}