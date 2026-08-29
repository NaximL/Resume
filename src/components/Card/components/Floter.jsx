import styles from "../card.module.css"
import Button_git from "./ButtonGit";
import Button_view from "./ButtonView";

const Floter = () => {
    return ( 
    <>

        <div className={styles.ProjectFooter}>
          <Button_git urls={["https://github.com/NaximL/Krok_do_phs","https://github.com/NaximL/krok_server"]}/>
          <Button_view url={"https://krok-do-phs.vercel.app/"}/>
        </div>

    </> 
    
);}
 
export default Floter;