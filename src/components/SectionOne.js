import styles from '../assets/sectionOne.module.css'


export const SectionOne = ( props ) => {
    return (
        <div className={styles.container}>
            section one
            {props.children}
        </div>
    )
}