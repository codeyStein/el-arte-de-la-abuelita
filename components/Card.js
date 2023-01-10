import styles from '../styles/Card.module.css'
import Image from 'next/image'
import Text from './Text.js'

export default function Card(props) {

    const isSmall = () => {
        if (props.style=="mini") {
            return true
        } else {
            return false
        }
    }

    const small = (
            <figure className={styles.small}>
                <Image 
                    src={props.section.src}
                    alt={props.section.alt}
                    width={300}
                    height={300}
                />
                <Text style='mini' label={props.section.label} />
                <div/>
            </figure>
    )

    const product = (
        <figure>
            <Image 
                src={props.section.src}
                alt={props.section.alt}
                width={300}
                height={300}
            />
            <Text style='mini' label={props.section.label} />
            <Text style='mini' label={props.section.price} />
        </figure>
    )

    return (
        <>
            {props.style=="mini" ? small : product}
        </>
    )
}

