import { useRef } from 'react'
import Link from "next/link"
import { TiThMenu, TiTimes } from "react-icons/ti"


export default function Navbar(props) {

    const nav = useRef()

    function toggleNav() {
        nav.current.classList.toggle("responsive_nav")
    }


    return (
        <nav>
            <div ref={nav}>
                    <Link href="/">Inicio</Link>
                    <Link href="/#about" scroll={true}>Sobre Nosotros</Link>
                    <Link href="/#shop" scroll={true}>Tienda</Link>
                    <Link href="/#contact" scroll={true}>Contacto</Link>

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

