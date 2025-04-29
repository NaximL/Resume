import styles from "../card_proj.module.css"

const Steck_cust = ({arr}) => {
    
    return (

            <div className={styles.Steck_icon_container_cust}>

                {arr.map((tech,index)=>(
                    <img key={index} className={styles.Steck_icon_cust} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`} alt={tech} />
                ))}
                
               
            </div>

    );
};

export default Steck_cust;