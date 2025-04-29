

const Contact = ({title,url,href}) => {
    return ( 
        <div onClick={()=>{window.open(href,"_blank")}} className="contact">
            <img src={url}/>
            <p>{title}</p>
        </div>
     );
}
 
export default Contact;