import styles from '../navbar.module.css';

const NavEL = ({text,href}) => {
    return ( <a href={href} className={styles.NavEl}>{text}</a> );
}
 
export default NavEL;