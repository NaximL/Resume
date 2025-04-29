import Logo from './img/Logo.svg';
import styles from "./help_comp.module.css"

const Icon = () => {
    return ( 
        <>
        <div className={styles.logo_container}>
            <img alt="logo" className={styles.logo} src={Logo}/>
        </div>
        </>
     );
}
 
export default Icon;