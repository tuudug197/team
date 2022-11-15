import { Button, Container } from 'react-bootstrap'
import styles from '../assets/window.module.css'

export const Window = () => {
    return (
        <Container>
            <div className={styles.window}>
                <h1>
                    Instant collaboration for remote teams
                </h1>
                <h2>
                    All in one fos your remote team chats,
                    collaborations and track projects
                </h2>
                <div>
                    <input></input>
                    <Button>Get early access</Button>
                </div>
            </div>
        </Container>
    )
}