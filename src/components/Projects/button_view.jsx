import View from "../../assets/img/open.svg"
const Button_view = ({url}) => {
    return ( 
        <div onClick={()=>{window.open(url,"_blank")}} className="View_button">
            <img src={View}/>
            <p>View</p>
        </div>
     );
}
 
export default Button_view;