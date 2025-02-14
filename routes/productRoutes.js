import { Router } from "express";
import { createProduct, getAllProducts ,updateProduct} from "../controllers/productController.js";

const productRoutes = Router()

//! product APIs

// get all products
productRoutes.get("/all", getAllProducts);
//http://localhost:2000/product/all


// create/add product
productRoutes.post("/create", createProduct) //http://localhost:2000/product/create

// update user details

productRoutes.put("/update",updateProduct); //http://localhost:2000/product/update




export default productRoutes;