const mongoose = require("mongoose");
<<<<<<< HEAD
=======

>>>>>>> fa72693562cd341495212a4396c13594fa57af03
const dotenv = require("dotenv");

dotenv.config();

<<<<<<< HEAD
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
=======
const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected")
    }
     catch (error) {
        console.log(error)
    }
}

module.exports= connectDB
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
