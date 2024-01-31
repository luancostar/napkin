import styles from './styles.module.css'
import React from 'react'

// eslint-disable-next-line react/prop-types
export default function SessionTitle ({textSession, textAuthor}) {
    return (
        <div>
        <h3 className={styles.titleMid}>{textSession}</h3> 
        <h3 className={styles.authorMid}>{textAuthor}</h3>
        </div>
    )
}