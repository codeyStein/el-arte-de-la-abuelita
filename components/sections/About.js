import React from 'react'
import Header from '../Header'
import Text from '../Text'
import Image from 'next/image'
import profileImage from '../../public/placeholder.jpg'

export default function About() {
  return (
    <section className="about" id="about">
      <Header label="Sobre Nosotros" primary={false} />
      <div>
        <Text label="Soy una abuelita de 79 años hago trabajo apasionado con bisuteria, y trabajo con madera a mano." style="mini" />
        <Image
          src={profileImage}
          alt="Imagen de perfil de Abuelita Miryam"
          width={300}
          height={250}
        />
      </div>
    </section>
  )
}

