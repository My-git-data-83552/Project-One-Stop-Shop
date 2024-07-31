import React from 'react';
import laptop1 from '../productImages/laptop1.jpg'
import laptop2 from '../productImages/laptop2.jpg'
import laptop3 from '../productImages/laptop4.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Product() {
  const laptops = [
    {
      image: laptop1,
      name: 'Laptop 1',
      description: 'This is a description for Laptop 1.',
      price: '999.99',
    },
    {
        image: laptop2,
      name: 'Laptop 2',
      description: 'This is a description for Laptop 2.',
      price: '799.99',
    },
    {
        image: laptop3,
      name: 'Laptop 3',
      description: 'This is a description for Laptop 3.',
      price: '599.99',
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center my-4">Laptops available to Buy</h1>
      <div className="container">
        <div className="row">
          {laptops.map((laptop, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <img
                  src={laptop.image}
                  className="card-img-top"
                  alt={laptop.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{laptop.name}</h5>
                  <p className="card-text">{laptop.description}</p>
                  <p className="card-text text-muted">${laptop.price}</p>
                  <Link to='/buy' className='btn btn-primary me-3'>Buy Now</Link>
                  <Link to='/addToCart' className='btn btn-warning'>Add to Cart</Link>            
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


