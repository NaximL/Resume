import styles from "../card_proj.module.css"

function Carousel({imgs}) {

  return (
  <div id={styles.proj_wd}>
    <div id={`${styles.caris}`} className="carousel slide">
      <div className={`carousel-inner ${styles.carusel_custom}`}>
        <div className="carousel-item active">
          <img src={imgs[0]} className="d-block w-100" alt="Img" />
        </div>
        <div className="carousel-item">
          <img src={imgs[1]} className="d-block w-100" alt="Img" />
        </div>
        <div className="carousel-item">
          <img src={imgs[2]} className="d-block w-100" alt="Img" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${styles.caris}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${styles.caris}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}

export default Carousel;