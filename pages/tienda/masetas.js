import React, { lazy, Suspense } from "react"
import Head from 'next/head'
import { NextSeo } from 'next-seo'
// COMPONENTS
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import Header from '../../components/Header'
// DATA
import productData from '../../data/products/masetas'

export default function Masetas() {

    const products = productData.map(product => {
        return (
            <Card
                key={Math.random() * (9999999 - 1000000) + 1000000}
                product={product}
                section={product}
                style="product"
            />

        )
    })


    return (
        <>
            <NextSeo
            title="El Arte de la Abuelita"
            titleTemplate='Masetas | %s'
            description="Soy una señora de 79 años hago bisuteria, y trabajo con madera a mano en El Salvador."
            canonical="https://el-arte-de-la-abuelita.netlify.app"
            openGrap={{
              url: "https://el-arte-de-la-abuelita.netlify.app",
              title: 'Masetas | El Arte de la Abuelita',
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
            <main>
                <Header label="Productos de Masetas" primary={false} />
                <div className="products" id="productos">
                    {products}
                </div>
            </main>
        </>
    )
}

