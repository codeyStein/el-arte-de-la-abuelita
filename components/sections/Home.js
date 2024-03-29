import Header from '../Header.js'
import Text from '../Text.js'
import Button from '../Button.js'
import Link from 'next/link'

export default function Home() {

    return (
        <header>
            < Header label="El Arte de la Abuelita" primary={true} />
            <Text style='mini' label="Bisuteria y manualidades a mano con madera"/>
            <div className="button-container">
                <Link href="/#shop"> <Button style='fill' label="Tienda" /> </Link>
                <Link href="/#shop"> <Button style='outline' label="Instagram" /> </Link>
            </div>
        </header>
    )
}

