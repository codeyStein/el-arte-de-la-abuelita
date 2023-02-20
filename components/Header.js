import React from 'react'
import style from '../styles/modules/Header.module.css'

export default function Header(props) {

    const isPrimary = props.primary

    return (
        <>
            {isPrimary && <h1 className={`${style.header} ${style.primary}`}>{props.label}</h1>}
            {isPrimary==false && <h2 className={style.header}>{props.label}</h2>}
        </>
    )
}

