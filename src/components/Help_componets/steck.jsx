import styles from "./help_comp.module.css"

const Steck = () => {
    return (
        <>
            <b className={styles.Steck}>Stack</b>

            <div className={styles.Steck_icon_container}>
                <img className={styles.Steck_icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <img className={styles.Steck_icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <img className={styles.Steck_icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
                <img className={styles.Steck_icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                <img className={styles.Steck_icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <img className={styles.Steck_icon} src="https://vite.dev/logo.svg" alt="Vite" />
                <img className={styles.Steck_icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />
            </div>
        </>
    );
};

export default Steck;