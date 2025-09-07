import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Navigation from '../components/navbar/Navig';
import Project from '../components/Card_project/Project';
import Block from '../components/Help_componets/block';
import Icon from '../components/Help_componets/icon';
import Steck from '../components/Help_componets/steck';
import About_me from '../components/About_me/About_me';


function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const elements = document.querySelectorAll('.vis');
    elements.forEach(element => observer.observe(element));
  }, []);

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

        <Block id='b2'>
          <Project
            name={"Mental health room"}
            id={1}
            description={`A system with a frontend built using React, Bootstrap, and JavaScript, and a backend powered by Express. Implemented request handling, a local database for cards, responsive design, and an emergency help feature: transferring user coordinates to the server and automatically calling an operator through a special library.`}
            stack={['react', 'bootstrap', 'javascript', 'mongodb', "express", "nodejs"]}
            l={true}
            imsf={["https://placehold.co/400x400", 'https://placehold.co/400x402', 'https://placehold.co/401x400']}
          />
        </Block>

        <Block id='b3'>
          <Project
            name={"Mental health room"}
            id={2}
            description={`A system with a frontend built using React, Bootstrap, and JavaScript, and a backend powered by Express. Implemented request handling, a local database for cards, responsive design, and an emergency help feature: transferring user coordinates to the server and automatically calling an operator through a special library.`}
            stack={['react', 'bootstrap', 'javascript', 'mongodb', "express", "nodejs"]}
            l={window.matchMedia("(max-width: 768px)").matches}
            imsf={["https://placehold.co/400x400", 'https://placehold.co/400x401', 'https://placehold.co/401x400']}
          />
        </Block>

        <Block id='b4'>
          <About_me /> 
        </Block>

      </div>
    </>
  );
}

export default Home;