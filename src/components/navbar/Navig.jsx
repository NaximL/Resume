import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef,useState } from 'react';
import Tg_butt from './Button_github';



const Navigation = ()=> {
  
const butt = useRef(null);
const [Them,SetThem] = useState(false)
const [Imgs,SetImgs] = useState('src/assets/img/dark_mode_dark.svg')

const nav = useRef(null);
const menu = useRef(null);
let start;
let proj;
let About;
let Cont;
useEffect(()=>{
 start = document.getElementsByClassName("Block")[0]
 proj =document.getElementsByClassName("Block")[1]
 About = document.getElementsByClassName("Block")[2]
 Cont = document.getElementsByClassName("Cont")[0]
})
let s;
function open() {
  if (s) {
    
  menu.current.style.transform = "translate(-100%)"
  s=false
  }
  else {
    menu.current.style.transform = "translate(0%)"
    s=true
  }
}

function o(el) {
  
  el.scrollIntoView({ behavior: 'smooth', block: 'center', behavior: 'smooth'});
  menu.current.style.transform = "translate(-100%)"
  s=false
}
const change_them = ()=>{
  if (Them) {

    butt.current.classList.remove("action")
    document.documentElement.style.setProperty('--color_them_invert', 'black');
    document.documentElement.style.setProperty('--color_them', 'white');
    document.documentElement.style.setProperty('--botder_them', 'rgb(226, 232, 240)');
    nav.current.classList.remove("bg-dark");
    nav.current.removeAttribute("data-bs-theme");
    SetImgs('/src/assets/img/dark_mode_dark.svg');
    SetThem(!Them);
  }
  else  {
  

    butt.current.classList.add("action")
    document.documentElement.style.setProperty('--color_them', 'black');
    document.documentElement.style.setProperty('--color_them_invert', 'white');
    document.documentElement.style.setProperty('--botder_them', 'rgba(255, 255, 255, 0.2)');
    nav.current.classList.add("bg-dark");
    nav.current.setAttribute("data-bs-theme", "dark");
    SetImgs('/src/assets/img/dark_mode.svg');
    SetThem(!Them);


}
}
    return (
        <>

      <div ref={menu} className='menu_phone'>
        <div className='op' id='op1' onClick={()=>o(start)}>Start</div>
        <div className='op' id='op2' onClick={()=>o(proj)}>Project</div>
        <div className='op' id='op3' onClick={()=>o(About)}>About me</div>
        <div className='op' id='op4' onClick={()=>o(Cont)}>Contact</div>
      </div>

        <nav ref={nav} className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Resume</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link active" aria-current="page" onClick={()=>o(start)} >Start</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>o(proj)} >Project</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>o(About)} >About me</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>o(Cont)} >Contact</div>
        </li>
      </ul>
    </div>
      <Tg_butt/>

  </div>
</nav>
        </>
    )
}

export default Navigation