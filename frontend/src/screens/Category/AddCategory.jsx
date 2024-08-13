import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../../productImages/addProduct.jpg";
import Navigation_bar from "../../components/Navigation_bar";
import { addCategories } from "../../services/CategoryService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function AddCategory() {
    const [category,setCategory] = useState({
        name:''
    }); 

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const newCategory=await addCategories(category);
            console.log('New Category Added: ',newCategory);
            toast.success('Category added successfully!!!');
        }
        catch(error){
            console.log('Something went wrong...',error);
            toast.error('Something went wrong...');
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
          <br />
          <h1 className="mb-4">Add Category</h1> <hr />
          <form onSubmit={handleSubmit}>
            <label about="name" className="col-form-label">Category Name</label>
            <input
              type="text"
              onChange={(e)=>{setCategory({ name: e.target.value });
            }}
              className="form-control"
              name="name"
              id="name"
              placeholder="Category Name"
              style={{backgroundColor:"transparent",
                borderColor:'lightgray'
              }}
            />
            <input
              type="submit"
              className="btn btn-primary mt-4"  style={{borderRadius:'100px'}}             
            />
             <Link to='/Category' className='btn btn-warning ms-3 mt-4' style={{borderRadius:'100px'}}>Go Back</Link>    
          </form>                         
        </div>
        <div className="col-4"></div>
      </div>
      </AdminSidebar>
    </div>
  );
}
