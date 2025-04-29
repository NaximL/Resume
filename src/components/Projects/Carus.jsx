import { useEffect } from "react";

function Carousel({imgs}) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
  <div id="proj_wd">
    <div id="carus" className="carousel slide">
      <div className="carousel-inner">
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
        data-bs-target="#carus"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carus"
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