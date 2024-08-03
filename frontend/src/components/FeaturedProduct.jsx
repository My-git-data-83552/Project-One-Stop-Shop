import slide1 from "../productImages/slide2.jpeg";
import slide2 from "../productImages/slide3.jpeg";
import slide3 from "../productImages/slide4.jpeg";

export const FeaturedProduct = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide mt-4"
      data-bs-ride="carousel"
      style={{
        width: "88%",
        borderRadius: "10px",
        height: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner" style={{ borderRadius: "50px" }}>
        <div className="carousel-item active">
          <img
            src={slide1}
            className="d-block w-100"
            alt="..."
            style={{ width: "500px", height: "500px" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Title-1</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={slide2}
            className="d-block w-100"
            alt="..."
            style={{ width: "500px", height: "500px" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Title-2</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
       
        <div className="carousel-item">
          <img
            src={slide3}
            className="d-block w-100"
            alt="..."
            style={{ width: "500px", height: "500px" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Title-3</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
