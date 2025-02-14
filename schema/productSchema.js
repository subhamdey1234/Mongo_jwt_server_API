import { Schema } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String },
    price: { type: Number },
    stock: { type: Number },
    discount: { type: String }
}, { timestamps: true })

export default productSchema