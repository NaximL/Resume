import styles from "../AboutMe.module.css"

const Contact = ({title,url,href}) => {
    return ( 
        <a href={href} className={styles.contact}>
            <img src={url}/>
            {title}
        </a>
     );
}
 
export default Contact;