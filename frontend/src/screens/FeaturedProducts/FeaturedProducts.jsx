import { useEffect, useState } from "react";
import { DeleteFeaturedProduct, FetchFeaturedProducts } from "../../services/FeaturedProductsService";
import { Link } from "react-router-dom";
import bg from "../../productImages/addProduct.jpg";
import { toast } from "react-toastify";
import AdminSidebar from "../../components/AdminSidebar";

const FeaturedProducts = () => {
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

  const handleDelete = async (id) => {
    try {
      await DeleteFeaturedProduct(id);
      setFeaturedProducts(featuredProducts.filter((featuredProduct) => featuredProduct.id !== null));
      window.location.reload();
      toast.success("Deletion Successful!!!", {
        onClose: () => window.location.reload()
      });
    } catch (error) {
      toast.error("Deletion Failed...");
      window.location.reload();
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <AdminSidebar>
      <br />
      <h1>Featured Products</h1>
      <hr />
      {error && <div className="alert alert-danger">{error}</div>}

      {featuredProducts.length === 0 && !error && (
        <div className="alert alert-info">
          No featured products available. Table is empty!
        </div>
      )}
      <div></div>
      <table className="table table-responsive table-success container">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {featuredProducts.map((featuredProduct, index) => (
            <tr key={index}>
              <td className="col">{index + 1}</td>
              <td className="col-3">{featuredProduct.title}</td>
              <td className="col-5">{featuredProduct.description}</td>
              <td className="col">
                <a href={`http://localhost:8080/admin/featuredProducts/${featuredProduct.fileName}`} target="_blank" rel="noopener noreferrer">
                    View Image
                  </a>
              </td>
              <td className="col">
                <Link className="btn btn-primary btn-sm me-3" to={`/featuredProduct/${featuredProduct.id}`} style={{borderRadius:'100px', width:'60px'}}>Edit</Link>
                <Link className="btn btn-danger btn-sm" onClick={() => handleDelete(featuredProduct.id)} style={{borderRadius:'100px', width:'60px'}}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-success mt-4 me-4 "to="/addFeaturedProducts" style={{borderRadius:'100px', width:'100px'}}>
        Add
      </Link>
      <Link className="btn btn-warning mt-4 me-4" to="/home" style={{borderRadius:'100px', width:'100px'}}>
        Go Back
      </Link>
      </AdminSidebar>
    </div>
  );
};

export default FeaturedProducts;
