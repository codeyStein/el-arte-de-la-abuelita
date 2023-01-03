import React from 'react'
import style from '../styles/Header.module.css'

export default function Header(props) {
    return(
        <h1 className={style.header}>{props.label}</h1>
    )
}

