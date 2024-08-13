import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editCategories, getCategoryById } from "../../services/CategoryService";
import bg from "../../productImages/addProduct.jpg";
import { toast } from "react-toastify";
import AdminSidebar from "../../components/AdminSidebar";

export default function EditCategory() {
  const { id } = useParams();
  const [category, setCategory] = useState({
    name: "", // Ensure this matches the CategoryDTO structure
  });
  

  const navigate=useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategoryById(id);
      setCategory(response);
    };
    fetchCategories();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editCategories(id, category); // Send the category object
      toast.success('Category updated successfully!!!');
      navigate('/category');
    } catch (error) {
      toast.error('Something went Wrong...');
    }
  }
  


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
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
        <br />  <h1 className="mb-4">Edit Category</h1> <hr />
          <form onSubmit={handleSubmit}>
            <label about="categoryName" className="col-form-label">
              Category Name
            </label>
            <input
              type="text"
              onChange={(e)=>{setCategory({ name: e.target.value });
            }}
              className="form-control"
              name="categoryName"
              id="categoryName"
              value={category.name}
              placeholder="Category Name"
              style={{ backgroundColor: "transparent" }}
              required
            />
            <input type="submit" className="btn btn-primary mt-4 me-3"  style={{borderRadius:'20px'}}/>
            <Link to='/category'className="btn btn-warning mt-4"  style={{borderRadius:'20px'}}>Go Back</Link>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
      </AdminSidebar>
    </div>
  );
}
