import Link from "next/link"
import Card from '../Card.js'
import Text from '../Text.js'
import Header from '../Header.js'
import sectionData from "../../data/sections.js"

export default function Shop() {


    const cards = sectionData.map(section => {

        function clickHandler() {
            location.href = section.href;
        }

        const fStyle = {
            background: `linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,0)), ${section.src}`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }

        return (
            <figure 
            style={fStyle}
            className="shop__card" 
            key={section.id} 
            onClick={clickHandler} > 
                        <Text label={section.label} />
            </figure>
        )
    })

    return (
        <section className="shop" id="shop">
            <Header label="Tienda" primary={false} />
            <div className="card_container">

	    {cards}

            </div>
        </section>
    )
}

