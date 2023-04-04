import Link from 'next/Link'
import Text from '../components/Text'
import styles from '../styles/modules/Footer.module.css'
import { RiFacebookFill, RiInstagramFill, RiPhoneFill } from "react-icons/ri"

const dataSocials = [
    {
      name: "Numero de Telefono",
      href: "N/A",
      label: "7210-3310",
      icon: RiPhoneFill
    },
    {
      name: "Instagram",
      href: "N/A",
      label: "@el_arte_de_la_abuelita",
      icon: RiInstagramFill
    },
    {
      name: "Facebook",
      href: "N/A",
      label: "@el_arte_de_la_abuelita",
      icon: RiFacebookFill
    }
]

const dataLinks = [
    {
        name: "Inicio",
        href: "/",
    },
    {
        name: "Sobre Nosotros",
        href: "/",
    },
    {
        name: "Tienda",
        href: "/",
    },
    {
        name: "Contacto",
        href: "/",
    }
]

const ItemLinks = dataLinks.map(link => {
    return (
        <Link href={link.href} >
        <Text label={link.name} style='mini' />
        </Link>
    )
})

const ItemSocials = dataSocials.map(social => {
    const Icon = social.icon

    return (
      <figure key={social.name} >
        <Icon size={30} />
        <Text style="mini" label={social.label} />
      </figure>
    )
})


export default function Footer() {
    return (
        <footer className={styles.footer}>

            <section className={styles.section}>
                <div className={styles.menu}>   { ItemLinks }   </div>
                <Text label="Soy una señora de 79 años hago bisuteria, y trabajo con madera a mano." style="mini" />
            </section>
            <div className={styles.socials}>    { ItemSocials } </div>

        </footer>
    )
}

