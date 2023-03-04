import React from 'react'
import styles from '../styles/modules/Text.module.css'

export default function Text(props) {

    const isMini = () => {
        if (props.style=='mini') {
            return true
        } else {
            return false
        }
    }

    return (
        <>
            {
                isMini ? <p className={`${styles.text} ${styles.mini}`} >{props.label}</p> :
                <p className={styles.text} >{props.label}</p>
            }
        </>
    )
}

