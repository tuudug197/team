import styles from '../assets/sectionTwo.module.css'
import { Container } from 'react-bootstrap'

export const SectionTwo = ( props ) => {
    return (
        <div className={ styles.container}>
            <div className={styles.innerContainer}>
                <Container>
                    <div className={styles.textContainer}>
                        <p className={styles.title}>{props.title}</p>    
                        <p className={styles.text}>
                            {props.text}
                        </p>
                        <p className={styles.link}>Learn more</p>
                    </div>
                </Container>
            </div>
            <div className={ styles.photoContainer}>
                {props.children}
            </div>
        </div>
    )
}