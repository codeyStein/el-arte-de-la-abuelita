import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>El Arte de la Abuelita</title>
        <meta name="description" content="Soy una señora de 79 años hago bisuteria, y trabajo con madera a mano." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <h1>Hello World</h1>
      </main>
    </>
  )
}
