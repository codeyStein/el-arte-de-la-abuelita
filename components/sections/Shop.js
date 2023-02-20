import Link from "next/link"
import Card from '../Card.js'
import Header from '../Header.js'
import sectionData from "../../data/sections.js"


export default function Shop() {

    const cards = sectionData.map(section => {
        return (
            <Link href={section.href}>
                <Card
                    key={section.id}
                    section={section}
                    product={section}
                    style="mini"
                />
            </Link>
        )
    })

    return (
        <section className="shop" id="shop">
            <Header label="Tienda" primary={false} />
            <div>
                {cards}
            </div>
        </section>
    )
}

