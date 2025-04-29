import { useEffect, useRef, useState } from "react";
import git from "../../assets/img/github.svg"
const Button_git = ({gits,url_1,url_2,url_orig}) => {
    const [state,useStates] = useState(false)
    const drop = useRef(null)
    const change = () =>{
        if (state) {
            drop.current.classList.remove("vis")
            useStates(!state)
        }
        else {
            drop.current.classList.add("vis")
            useStates(!state)
        }
    }
    return ( 
        <>
        <div onClick={()=>{if (gits) {change()} else {window.open(url_orig, '_blank');}}} className="Github_button">
            <img src={git}/>
            <p>Github</p>

        </div>
        <div ref={drop} className="Github_button_dropdown">
                    <b onClick={()=>{window.open(url_1, '_blank');change();}}>Client</b>
                    <b onClick={()=>{window.open(url_2, '_blank');change();}}>Server</b>
        </div>
        </>
     );
}
 
export default Button_git;