import styles from './styles.module.css'
import React from 'react'

export default function Header ({headerTitle}) {
    return (
        <div className={styles.backgroundHeader}>
        <h1 className={styles.titleBig}>
            {headerTitle}
        </h1>
        </div>
    )
}