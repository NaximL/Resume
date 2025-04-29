import { useRef, useState } from "react";
import styles from "../card_proj.module.css"

const Button_git = ({urls}) => {
    
    const [state,useStates] = useState(false)
    const drop = useRef(null)
    const change = () =>{
        if (state) {
            drop.current.classList.remove(styles.vis)
            useStates(!state)
        }
        else {
            drop.current.classList.add(styles.vis)
            useStates(!state)
        }
    }
    return ( 
        <>
        <a onClick={()=>{if (urls.length>=2) {change();} else {window.open(urls[0], '_blank');}}} title="Github" className={styles.Github_button}>
            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg`}/>
            <p>Github</p>
        </a>
        <div ref={drop} className={styles.Github_button_dropdown}>
                    <a onClick={change} href={urls[0]}>Client</a>
                    <a onClick={change} href={urls[1]}>Server</a>
        </div>
        </>
     );
}
 
export default Button_git;