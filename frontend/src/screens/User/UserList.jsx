// src/components/UsersList.js
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/UserService";
import AdminSidebar from "../../components/AdminSidebar";
import bg from "../../productImages/addProduct.jpg";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
      } catch (error) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container-fluid" style={{
      backgroundImage: `url(${bg})`, 
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
  }}>
      <AdminSidebar>
    <div className="container mt-4">
      <h2 className="mb-4"><strong>Users List</strong></h2>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/featuredProducts' className="button-gold mt-3" style={{
        width:'20rem'
      }}>Go Back!</Link>
      </div>
      </AdminSidebar>
    </div>
  );
};

export default UsersList;
