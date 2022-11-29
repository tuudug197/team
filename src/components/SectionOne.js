import styles from '../assets/sectionOne.module.css'
import { Container } from 'react-bootstrap'

export const SectionOne = () => {
    return (
        <div className={styles.container}>
            <Container>
                <div className={styles.innerContainer}>
                    <p className={styles.title}>
                        Instant collaborations for remote teams
                    </p>
                    <p className={styles.description}>
                        All in one for your remote team chats,
                        collaborations and track projects
                    </p>
                    <div className={styles.row}>
                        <input placeholder='Email'></input>
                        <button className={styles.button}>Get early access</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}