import styles from '../assets/sectionOne.module.css'
import { Container } from 'react-bootstrap'

export const SectionOne = () => {
    return (
        <div className={styles.container}>
            <Container>
                <div className={styles.innerContainer}>
                    <h1>
                        Instant collaboration for remote teams
                    </h1>
                    <h2>
                        All in one for your remote team chats,
                        collaborations and track projects
                    </h2>
                    <div className={styles.row}>
                        <input placeholder='Email'></input>
                        <button className={styles.button}>Get early access</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}