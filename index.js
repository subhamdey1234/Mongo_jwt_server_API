import express from "express";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
const app = express()

// middlewares
app.use(express.json())  //json parser
// APIs
app.get("/", (req, res) => {
    res.send("Server At Work");
})

// routes
app.use("/user", userRoutes)  //user routes
app.use("/product", productRoutes) //productRoutes

// database connection
connectDb()


app.listen(2000, "localhost", () => {
    console.log("Server is running at the port http://localhost:2000")
})