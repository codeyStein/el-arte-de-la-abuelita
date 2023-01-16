import Head from 'next/head'
import { NextSeo } from 'next-seo'
// COMPONENTS
import Navbar from '../components/Navbar'
// SECTIONS
import Home from '../components/Home.js'
import Shop from '../components/Shop.js'
import Contact from '../components/Contact.js'

export default function Index() {
  return (
    <>
      <NextSeo
        title="El Arte de la Abuelita"
        titleTemplate='Inicio | %s'
        description="Soy una señora de 79 años hago bisuteria, y trabajo con madera a mano en El Salvador."
        canonical="https://el-arte-de-la-abuelita.netlify.app"
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Home />
        <Shop />
        <Contact />
      </main>
    </>
  )
}
