import React, { lazy, Suspense } from "react"
import Head from 'next/head'
import { NextSeo } from 'next-seo'
// COMPONENTS
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// SECTIONS
import Home from '../components/sections/Home'
const Shop = lazy(() => import('../components/sections/Shop'))
const Contact = lazy(() => import('../components/sections/Contact'))
const About = lazy(() => import('../components/sections/About'))
// Lazy Load Above Components

export default function Index() {
  return (
    <>
      <NextSeo
        title="El Arte de la Abuelita"
        titleTemplate='Inicio | %s'
        description="Soy una señora de 79 años hago bisuteria, y trabajo con madera a mano en El Salvador."
        canonical="https://el-arte-de-la-abuelita.netlify.app"
        openGrap={{
          url: "https://el-arte-de-la-abuelita.netlify.app",
          title: 'El Arte de la Abuelita',
          description: "Soy una abuelita de 79 años hago trabajo apasionado con bisuteria, y trabajo con madera a mano en El Salvador.",
          images: [{
            url: "https://instagram.fsal1-1.fna.fbcdn.net/v/t51.2885-19/73387363_533718470744631_1296071016530837504_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsal1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=0118Y-RM6tsAX9g4740&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDKXaB6f2FM2lYCi8libw6q8J0bSHmln0SAk-VqEpVvag&oe=63CC26CE&_nc_sid=8fd12b",
            width: 150,
            height: 150,
            alt: "Soy una abuelita de 79 años hago trabajo apasionado con bisuteria, y trabajo con madera a mano en El Salvador"
          }]
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home />
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <About />
          <Shop />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
