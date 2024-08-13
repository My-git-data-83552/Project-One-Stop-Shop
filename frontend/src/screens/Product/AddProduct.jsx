import React, { useState, useEffect } from 'react';
import { addProduct } from '../../services/ProductService';
import { getCategories } from '../../services/CategoryService';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from "../../productImages/addProduct.jpg";
import { Link, useNavigate } from 'react-router-dom';
import SideBar from '../../components/SideBar';

export default function AddProduct() {
    const [product, setProduct] = useState({
        productName: '',
        brand: '',
        price: 0,
        inventory: 0,
        categoryId: '',
        specificationId:'',
    });

    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const nav=useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Error fetching categories. Please try again later.');
            }
        };
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(product);
        nav('/addSpecification', { state: { product } });
    }

    return (
        <div className="container-fluid" style={{
            backgroundImage: `url(${bg})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <br />
            <SideBar>
            <h1 className="mb-4">Add Product</h1>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row">
                <div className='col-md-3'></div>
                <div className="col-md-6" >
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="productName"
                                name="productName"
                                value={product.productName}
                                onChange={handleChange}
                                placeholder="Product Name"
                                style={{backgroundColor:"transparent" , borderColor:"lightgray" }}
                                // required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand">Brand</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="brand"
                                name="brand"
                                value={product.brand}
                                onChange={handleChange}
                                placeholder="Brand"
                                style={{backgroundColor:"transparent" , borderColor:"lightgray" }}
                                // required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className="form-control mb-3"
                                id="price"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                placeholder="Price"
                                style={{backgroundColor:"transparent" , borderColor:"lightgray" }}
                                // required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inventory">inventory</label>
                            <input
                                type="number"
                                className="form-control mb-3"
                                id="inventory"
                                name="inventory"
                                value={product.inventory}
                                onChange={handleChange}
                                placeholder="inventory"
                                style={{backgroundColor:"transparent" , borderColor:"lightgray" }}
                                // required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="categoryId">Category</label>
                            <select
                                
                                className="form-select mb-3"
                                id="categoryId"
                                name="categoryId"
                                value={product.categoryId}
                                onChange={handleChange}
                                style={{backgroundColor:"transparent" , borderColor:"lightgray" }}
                                // required
                            >
                                <option value="" disabled>Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" style={{width:'120px',borderRadius:'20px'}}>Add SPecs</button>
                        <Link to='/Products' className='btn btn-warning ms-5 mt-3' style={{width:'120px',borderRadius:'20px'}}>Go Back</Link>
                        </form>
                </div>
                <div className='col-md-3'></div>
            </div>
            </SideBar>
        </div>
    );
}
