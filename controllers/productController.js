import Product from "../model/productModel.js"


export const getAllProducts = async (req, res) => {
    try {
        const data = await Product.find()
        res.status(200).send(data)
    }
    catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}
export const createProduct = async (req, res) => {
    try {
        const ProductData = new Product(req.body)
        await ProductData.save()
        res.status(201).send({ message: "Product added successfully" })
    }
    catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { name } = req.params
        const data = req.body
        const response = await Product.updateOne({ name: name }, { $set: { ...data } })
        res.status(201).send({ message: "Product updated successfully" })
    }
    catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}


