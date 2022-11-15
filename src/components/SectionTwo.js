import styles from '../assets/sectionTwo.module.css'
import { Container } from 'react-bootstrap'

export const SectionTwo = ( props ) => {
    return (
        <div className={ styles.container}>
            <Container>
                <h1>{props.title}</h1>    
                <p>
                    {props.text}
                </p>
            </Container>
            <div className={ styles.photo} />
        </div>
    )
}