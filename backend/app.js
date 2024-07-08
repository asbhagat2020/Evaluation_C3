const express = require("express");
const authRoutes = require("./src/routes/authRoutes.js");
const orderRoutes = require("./src/routes/orderRoutes.js");
const bookRoutes = require("./src/routes/bookRoutes.js");
const reviewRoutes = require("./src/routes/reviewRoutes.js");
const sequelize = require("./src/configs/db.js");
const connectDB = require("./src/configs/mongoose.js");
const cors = require("cors");

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
