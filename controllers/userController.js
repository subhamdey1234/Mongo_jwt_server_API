import User from "../model/userModel.js"
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"
// const saltRound = 10;
// const secketKey = "Suchi123456"  //jwt webtoken
import { generateToken } from "../utils/jwt.js";
import { comparePassword, createHashedPassword } from "../utils/bcrypt.js";


export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).send(allUsers)
    }
    catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}

export const createUser = async (req, res) => {  //register
    try {
        let data = req.body
        // console.log(data.password);
        // const hashedPass = await bcrypt.hash(data.password, saltRound)
        const hashedPass = await createHashedPassword(data.password)
        // console.log(hashedPass);

        // const userData = new User(req.body)
        const userData = new User({ ...data, password: hashedPass })
        await userData.save()
        res.status(201).send({ message: "User added successfully" })
    }
    catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { email } = req.query
        const isUser = await User.findOne({ email })
        if (isUser) {
            await User.updateOne({ email }, { $set: { ...req.body } })
            res.status(200).send({ message: "User updates successfully" })

        }
        else {
            res.status(400).send({ error: "Invalid email", message: "User not registered" })
        }
    }
    catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}



export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const isUser = await User.findOne({ email })
            if (isUser) {
                //bcrypt to compare password
                // const isMatched = await bcrypt.compare(password, isUser.password);
                const isMatched = await comparePassword(password, isUser.password)
                if (isMatched) {
                    // success result(tokenization)
                    // let token = jwt.sign({ id: isUser._id }, secketKey, { expiresIn: "600" })
                    let token = generateToken({ id: isUser._id }, 600) //number:second string:millisecond
                    res.status(200).send({ message: "User Login Successful", token })
                }
                else {
                    res.status(400).send({ error: "password not match" })
                }
            }
            else {
                res.status(400).send({ error: "User not found" })
            }
        }
        else {
            res.status(400).send({ error: "Provide all required fields" })
        }
    }

    catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }

}