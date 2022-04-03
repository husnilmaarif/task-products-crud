import axios from "axios";
import "./index.scss";
import Input from "../../components/Input";
import React, { useState } from "react";

const Tambah = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/product", {
        name,
        price,
        stock,
      });
      alert("data berhasil disimpan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={saveProduct}>
          <Input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Produk..." label="Nama" />
          <Input name="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Harga Produk..." label="Harga" />
          <Input name="Stock" type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock Produk..." label="Stock" />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambah;
