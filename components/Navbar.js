import { useRef } from 'react'
import Link from "next/link"
import { TiThMenu, TiTimes } from "react-icons/ti"


export default function Navbar() {

    const nav = useRef()

    function toggleNav() {
        nav.current.classList.toggle("responsive_nav")
    }

    return (
        <nav>
            <div ref={nav}>
                <Link href="#">Inicio</Link>
                <Link href="#about">Sobre Nosotros</Link>
                <Link href="#shop">Tienda</Link>
                <Link href="#contact">Contacto</Link>

                <button onClick={toggleNav} className="nav__btn nav__btn-close" >
                    <TiTimes />
                </button>
            </div>

            <button onClick={toggleNav} className="nav__btn" >
                <TiThMenu />
            </button>
        </nav>
    )
}

