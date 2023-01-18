import React from "react"
import { FaInstagramSquare, FaFacebookSquare, FaPhoneSquareAlt } from 'react-icons/fa'
import Header from './Header.js'
import Text from './Text.js'

export default function Contact() {

    const contactProviders = [
        {
            name: "Numero de Telefono",
            href:"N/A",
            label:"7210-3310",
            icon: FaPhoneSquareAlt
        },
        {
            name: "Facebook",
            href:"N/A",
            label:"@el_arte_de_la_abuelita",
            icon: FaFacebookSquare
        },
        {
            name: "Instagram",
            href:"N/A",
            label:"@el_arte_de_la_abuelita",
            icon: FaInstagramSquare
        }
    ]

    const contacts = contactProviders.map(provider => {
        const Icon = provider.icon

        return (
                <figure key={provider.name} >
                    <Icon size={30} />
                    <Text style="mini" label={provider.label} />
                </figure>
        )
    })


    return (
        <section className="contact">
            <Header label="Contacto" primary={false} />

            <div className="contact_container">
                <Text style="mini" label="Tienes una consulta o pregunta relacionada con mi trabajo? No tenga pena de contactarme!" />
                <div>
                    {contacts}
                </div>
            </div>

        </section>
    )
}

