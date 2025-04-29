import Logo from '../assets/img/logo.svg';

const Icon = () => {
    return ( 
        <>
        <div className="logo-container">
            <img alt="logo" className="logo" src={Logo}/>
        </div>
        </>
     );
}
 
export default Icon;