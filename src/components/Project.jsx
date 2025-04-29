import Carousel from "./Projects/Carus"
import Button_git from "./Projects/button_git";
import Button_view from "./Projects/button_view";
import Steck_cust from "./Projects/steck_cast";


const Project = ({name,description,stack,l,imsf}) => {
    return ( 
    <div className="project vis">
      {l && (<Carousel imgs={imsf} />)}
      <div className="project-content">
        <h1>{name}</h1>
        <Steck_cust arr={stack}/> 
        <p>{description}</p>
        <div className="project_cont_butt">
          <Button_git gits={true} url_1={"https://github.com/NaximL/Krok_do_phs"} url_2={"https://github.com/NaximL/krok_server"}/>
          <Button_view url={"https://krok-do-phs.vercel.app/"}/>
        </div>
      </div>
      {!l && (<Carousel imgs={imsf} />)}
  </div>
       );
}
 
export default Project;