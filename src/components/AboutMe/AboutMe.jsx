
import styles from "./AboutMe.module.css"
import imag from "../../assets/img/AboutMe.jpg"
import CircularTextSVG from "./components/RoundText";

const AboutMe = () => {
  return (


    <section id="AboutMe" className="TitleContainer">

      <div className={styles.AboutMeImgContainer}>
        <div className={styles.CircleDecor}>
          <CircularTextSVG />
          <h1>👨🏻‍💻</h1>
        </div>
        <img
          alt="img"
          src={imag}
          className={styles.AboutMeImg}
        />
      </div>

      <div id={styles.AboutMeTextContainer}>
        <b className="TitleMini">about me</b>
        <h2>A dedicated Front-end Developer based in Poltava, Ukraine📍</h2>
        <p>Hey, my name is Maksym, and I’m a Frontend Developer from Ukraine. I focus on creating responsive and user-friendly applications with React, JavaScript, and modern tools.
          I enjoy writing clean, efficient code and turning ideas into smooth digital experiences. My passion is not just building apps, but making them intuitive, fast, and visually appealing.
          I’m constantly learning new technologies and love working in teams where creativity meets problem-solving.
        </p>
      </div>


    </section>




  );
};

export default AboutMe;