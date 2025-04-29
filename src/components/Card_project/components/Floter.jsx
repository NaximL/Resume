import styles from "../card_proj.module.css"
import Button_git from "./button_git";
import Button_view from "./button_view";

const Floter = () => {
    return ( 
    <>

        <div className={styles.project_cont_butt}>
          <Button_git urls={["https://github.com/NaximL/Krok_do_phs","https://github.com/NaximL/krok_server"]}/>
          <Button_view url={"https://krok-do-phs.vercel.app/"}/>
        </div>

    </> 
    
);}
 
export default Floter;