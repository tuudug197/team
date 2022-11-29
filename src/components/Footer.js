import styles from '../assets/footer.module.css'
import {Row ,Col, Container} from 'react-bootstrap'

export const Footer = () => {
    return (
        <div className={ styles.container}>
                <Row>
                   
                    <Col xs={3}>
                        left
                    
                    </Col>  

                    <Col xs={6}>
                        <Row xs={4}>   
    
                            <p>Use Cases</p>
                            <p>UI Design</p>
                            <p>UX Design</p>
                            <p>Prototyping</p>
                            <p>UI Design</p>
                            <p>UX Design</p>
                            <p>Prototyping</p>
                        </Row>
                        <Col xs={4}>   
                            <p>Explore</p>
                            <p>Figma</p>
                            <p>Customers</p>
                            <p>Why I Love figma</p>
                            <p>Figma</p>
                            <p>Customers</p>
                        </Col>
                        <Col xs={4}> 
                            <p>Use cases</p>
                            <p>Community Resources Hub</p>
                            <p>Support</p>
                            <p>Education</p>
                            <p>Community Resources Hub</p>
                            <p>Support</p>
                            <p>Education</p>
                        </Col>  
                   
                    </Col>   
                    
                    
                        
                    <Col xs={3}> 

                        <p className={styles.text}>Subscribe to our newsletter</p>
                        <input placeholder='Email' type='text' className={styles.input}></input>
                    </Col>
                </Row>
        </div>
    )
}