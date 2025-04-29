import Carousel from "./components/Carus"
import Header_Card from "./components/Header_Card.jsx";
import styles from "./card_proj.module.css"
import Floter from "./components/Floter.jsx";

const Project = ({name,description,stack,l,imsf}) => {
    return ( 
    <div className={`${styles.project} vis`}>

      {l && (<Carousel imgs={imsf} />)}

      <div>

        <Header_Card name={name} description={description} stack={stack}/>

        <Floter/>

      </div>
      
      {!l && (<Carousel imgs={imsf} />)}
  </div>
       );
}
 
export default Project;