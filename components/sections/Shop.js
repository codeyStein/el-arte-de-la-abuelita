import Link from "next/link"
import Header from '../Header.js'
import Text from '../Text.js'
import sectionData from '../../data/sections.js'

export default function Shop() {


	const cards = sectionData.map(section => {
		return (
			<Link id={section.id} href={section.href}>
			<figure className={`${section.label}__card card__mini`}>
			<p>{section.label}</p>
			</figure>
			</Link>
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

