import { useEffect, useState } from "react";
import { FetchFeaturedProducts } from "../services/FeaturedProductsService";

export const FeaturedProduct = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const data = await FetchFeaturedProducts();
        setFeaturedProducts(data);
      } catch (error) {
        console.log(error);
        setError("Error while fetching the featured products");
      }
    };
    fetchFeaturedProducts();
  }, []);

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide mt-1"
      data-bs-ride="carousel"
      style={{
        width: "100%",
        borderRadius: "2px",
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
      <div className="carousel-inner" style={{ borderRadius: "2px" }}>

        {featuredProducts.map((featuredProduct)=>(
          <div className="carousel-item active">
          <img
            src={`http://localhost:8080/admin/featuredProducts/${featuredProduct.fileName}`}
            className="d-block w-100"
            style={{ width: "100%", height: "40rem" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>{featuredProduct.title}</h5>
            <p>{featuredProduct.description}</p>
          </div>
        </div>
        ))}
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
