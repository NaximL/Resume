import Header_Card from "./components/Header_Card.jsx";
import styles from "./card.module.css";

const Project = ({ name, id, description, stack, l, imgs }) => {
  return (
    <div id={`project-${id}`} className={`${styles.Project}`}>
      {l && <img
        alt="image"
        src={imgs}
        className={styles.ProjectImg}
      />}
      <Header_Card name={name} description={description} stack={stack} />
      {!l && <img
        alt="image"
        src={imgs}
        className={styles.ProjectImg}
      />}
    </div>
  );
}

export default Project;