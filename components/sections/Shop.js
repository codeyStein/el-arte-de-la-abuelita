import Card from './Card.js'
import Header from './Header.js'
import sectionData from "../data/sections.js"


export default function Shop() {

    const cards = sectionData.map(section => {
        return (
            <Card
                key={section.id}
                section={section}
                style="mini"
            />

        )
    })

    return (
        <section className="shop">
            <Header label="Tienda" primary={false} />
            <div>
                {cards}
            </div>
        </section>
    )
}

