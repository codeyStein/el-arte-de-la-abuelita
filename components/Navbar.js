import Link from "next/link"
import { TiThMenu, TiTimes } from "react-icons/ti"
import styles from '../styles/Navbar.module.css'


export default function Navbar() {

    function showNav() {
        console.log("Show Nav")
    }

    return (
        <div className={styles.nav}>
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/tienda">Tienda</Link>
                <Link href="/contacto">Contacto</Link>
                <button onClick={showNav} className={`${styles.nav__btn} ${styles.nav__close}`} >
                    <TiTimes />
                </button>
            </nav>

                <button onClick={showNav} className={styles.nav__btn} >
                    <TiThMenu />
                </button>
        </div>
    )
}

