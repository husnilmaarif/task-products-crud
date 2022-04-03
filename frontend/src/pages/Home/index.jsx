import { Link } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get("http://localhost:3000/product");
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus produk ini?")) {
      try {
        await axios.delete(`http://localhost:3000/product/${id}`);
        getProduct();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tambah Produk
      </Link>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-center">Price</th>
            <th className="text-center">Stock</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td className="text-center">Rp {product.price}</td>
              <td className="text-center">{product.stock} item</td>
              <td className="text-center">
                <Link to={`/edit/${product._id}`} className="btn btn-sm btn-warning me-lg-2">
                  Edit
                </Link>
                <Link to="#" onClick={() => deleteProduct(product._id)} className="btn btn-sm btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
