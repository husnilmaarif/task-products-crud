import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const insertedProduct = await product.save();
    res.status(201).json(insertedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
