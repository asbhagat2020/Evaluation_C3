const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/authRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const bookRoutes = require("./src/routes/bookRoutes");
const reviewRoutes = require("./src/routes/reviewRoutes");
const sequelize = require("./src/configs/db");
const connectDB = require("./src/configs/mongoose");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/reviews", reviewRoutes);

sequelize.sync();
connectDB();

module.exports = app;
