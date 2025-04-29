import Steck_cust from "./steck_cast";


const Header_Card = ({name,stack,description}) => {
    return ( 
        <>
            <h1>{name}</h1>
            <Steck_cust arr={stack}/> 
            <p>{description}</p>
        </>
     ); 
}
 
export default Header_Card;