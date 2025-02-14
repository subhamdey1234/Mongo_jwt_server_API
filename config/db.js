import mongoose from "mongoose";

const dbURL = "mongodb://localhost:27017/mydatabase";

const connectDb = async () => {
    try {
        await mongoose.connect(dbURL)
        console.log("db connected successfully");
    }
    catch (error) {
        console.log("Error in db connection", error);
    }
}

export default connectDb;