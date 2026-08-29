import Steck_cust from "./steck_cast";
import styles from '../card.module.css';
import Floter from "./Floter";

const Header_Card = ({ name, stack, description }) => {
    return (
        <div className={styles.ProjectHeader}>
            <h3>{name}</h3>
            <p style={{ color: "grey", textAlign: "center", marginTop: "0.5rem" }}>{description}</p>
            <Steck_cust arr={stack} />
            <Floter />

        </div>
    );
}

export default Header_Card;