import React from 'react'
import Header from '../Header'
import Text from '../Text'
import Image from 'next/image'
import profileImage from '../../public/img/profile_img.png'

export default function About() {
  return (
    <section className="about" id="about">
      <Header label="Sobre Yo" primary={false} />
      <div>
        <Text label="Soy una abuelita de 79 años hago trabajo apasionado con bisuteria, y trabajo con madera a mano." style="mini" />
        <Image
          src={profileImage}
          alt="Imagen de perfil El Arte de la Abuelita"
          width={100}
          height={100}
        />
      </div>
    </section>
  )
}

