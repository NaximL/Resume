import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/NavBar/Navigation';
import Project from './components/Card/Project';
import Block from './components/Help_componets/block';
import Icon from './components/Help_componets/icon';
import Steck from './components/Help_componets/steck';
import AboutMe from './components/AboutMe/AboutMe';
import imgs from './assets/img/screen.png';
import Contact from './components/Contact/Contact';

function App() {
  // useEffect(() => {
  //   import('bootstrap/dist/js/bootstrap.bundle.min.js');
      
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('visible');
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, { threshold: 0.3 });

  //   const elements = document.querySelectorAll('.vis');
  //   elements.forEach(element => observer.observe(element));
  // }, []);

  return (
    <>
      <div id="globals">

        <Navigation />

        <Block id='b1' style={{ gap: "20px", marginInline: "20px" }} >

          <div className='Hello'>
            <b id='Hello_text'>Front-End React <br></br>Developer</b><span>👋</span>
            <p>Hello, my name is Maksym, I am a React developer and I live in Ukraine📍</p>
            <Steck />
          </div>

          <Icon />

        </Block>



        <Block id='b2' >
          <AboutMe />
        </Block>



        <Block id='b3'>
          <section id='Projects' className='TitleContainers'>

            <b className='TitleMini'>Portfolio</b>
            <h2>Each project is a unique piece of development🧩</h2>
            <div className='ProjectsContainer'>
              <Project
                name={"CAR 3D MODAL🚗"}
                id={1}
                description={`A system with a frontend built using React, Bootstrap, and JavaScript, and a backendbraryA system with a frontend built using React, Bootstrap, and JavaScript, and a backendbraryA system with a frontend built using React, Bootstrap, and JavaScript, and a backendbraryA system with a frontend built using React, Bootstrap, and JavaScript, and a backendbrary.`}
                stack={['react', 'bootstrap', 'javascript', 'mongodb', "express", "nodejs"]}
                l={true}
                imgs={imgs}
              />

              <Project
                name={"CAR 3D MODAL🚗"}
                id={1}
                description={`A system with a frontend built using React, Bootstrap, and JavaScript, and a backendbraryA system with a frontend built using React, Bootstrap, and JavaScript, and a backendbraryA system with a frontend built using React, Bootstrap, and JavaScript, and a backendbraryA system with a frontend built using React, Bootstrap, and JavaScript, and a backendbrary.`}
                stack={['react', 'bootstrap', 'javascript', 'mongodb', "express", "nodejs"]}
                l={false}
                imgs={imgs}
              />

            </div>

          </section>

        </Block>




        <Block id='b4'>
          <Contact />
        </Block>
      </div>
    </>
  );
}

export default App;