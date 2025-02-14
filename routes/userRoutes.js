import express from 'express'
import { createUser, getAllUsers, updateUser, userLogin } from '../controllers/userController.js';

const userRoutes = express.Router()


// user APIs
// get All users Data
userRoutes.get("/allusers", getAllUsers)  //http://localhost/user/allusers

// create/add user//registration//signup
userRoutes.post("/create", createUser) //http://localhost:2000/user/create


// update user
userRoutes.put("/update", updateUser)  //http://localhost:2000/user/update

//user login
userRoutes.post("/login", userLogin); //http://localhost:2000/user/login

export default userRoutes;