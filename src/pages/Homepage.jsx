import styles from '../assets/homepage.module.css'
import { SectionOne, SectionTwo } from '../components'
import photo1 from '../photos/photo1.svg'

const text = { 
    textOne: "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place. " 
,   titleOne: "Simple task management"
,   titleTwo: "Scheduling that actually works" 
,   textTwo: "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place. "
,   titleThree: "Your Hub for teamwork"
,   textThree: "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place. "
}

export const Homepage = () => {
    return (
        <div className={ styles.container}>   

            <SectionOne />

            <SectionTwo
                text = {text.textThree}
                title = {text.titleThree}
                textRight = {true}
            >
            <div>
               <img src={photo1}/>
            </div>


            </SectionTwo>
            <SectionTwo 
                textRight = {false}
                text = {text.textOne}
                title = {text.titleOne}
               >  
                
            </SectionTwo>
        </div>
    )
}        