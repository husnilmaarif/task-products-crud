import express from "express";
import { getProducts, getProductsById, saveProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/product", getProducts);
router.get("/product/:id", getProductsById);
router.post("/product", saveProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
