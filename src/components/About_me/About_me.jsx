import Contacts from "./components/contacts";
import styles from "./about_me.module.css"
const About_me = () => {
    return (
      <div id="AboutMe" className={`${styles.aboutsection} vis`}>
        <h2>About Me 👨‍💻</h2>

        <p>
          I'm a passionate Front-End Developer from Ukraine 🇺🇦 with a focus on building responsive and user-friendly applications.
          I love crafting clean and efficient code, working mostly with React, JavaScript, and modern frameworks.
        </p>

        <p>
          I enjoy solving real-world problems through code and constantly learning new technologies.
          Outside of coding, I’m interested in design, psychology, and personal development.
        </p>

        <p>
          Currently, I’m looking for opportunities to collaborate with ambitious teams and create meaningful digital experiences.
        </p>

        <Contacts/>
      </div>
    );
  };
  
  export default About_me;