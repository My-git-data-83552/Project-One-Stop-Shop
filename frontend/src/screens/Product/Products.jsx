

  

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
      <SideBar>
      <h2 style={{ padding: "10px" }}>Products Available</h2>
      <div className="container">
        <Link
          to="/addProduct"
          className="btn btn-dark mt-3 mb-3 d-flex justify-content-around"
          style={{borderRadius:'100px'}}
        >
          Add New Product
        </Link>
        <hr />
        <table
          className="table col-6"
          style={{ backgroundColor: "rgba(210,130,240, 0.3)" }}
        >
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Inventory</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.brand}</td>
                <td>{product.inventory}</td>                
                <td>{product.price}</td>
                <td>
                  <Link
                    to={`/editProduct/${product.id}`}
                    className="btn btn-warning me-3" style={{borderRadius:'100px'}}
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => handleDelete(product.id)}
                    className="btn btn-danger" style={{borderRadius:'100px'}}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </SideBar>
    </div>
  );
};
