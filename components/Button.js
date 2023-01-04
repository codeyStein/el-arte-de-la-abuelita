import styles from '../styles/Button.module.css'

export default function Button(props) {

    return (
        <>
            {
            props.style=='outline' ? <button className={`${styles.button} ${styles.outline}`} onClick={props.clickAction}>{ props.label }</button> :
            <button className={`${styles.button} ${styles.fill}`} onClick={props.clickAction}>{ props.label }</button>
            }
        </>
    )
}

