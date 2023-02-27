import styles from '../styles/modules/Card.module.css'
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

    const product = (
        <figure className={`${styles.product} ${styles.card}`}>
            <Image 
                src={props.product.src}
                alt={props.product.alt}
                objectFit="cover"
                width={300}
                height={300}
            />
            <div className={styles.product_name} >
                <Text style='mini' label={props.product.name} />
            </div>
            <Text style='mini' label={`$${props.product.price}`} />
        </figure>
    )

    const small = (
            <figure className={`${styles.small} ${styles.card}`}>
                <Image 
                    src={props.section.src}
                    alt={props.section.alt}
                    layout="fill" 
                    objectFit="cover"
                />
                <Text style='mini' label={props.section.label} />
                <div/>
            </figure>
    )


    return (
        <>
            {props.style=="mini" ? small : product}
        </>
    )
}

