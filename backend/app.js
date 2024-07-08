const express = require("express");
<<<<<<< HEAD
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/authRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const bookRoutes = require("./src/routes/bookRoutes");
const reviewRoutes = require("./src/routes/reviewRoutes");
const sequelize = require("./src/configs/db");
const connectDB = require("./src/configs/mongoose");
const cors = require("cors");

dotenv.config();

=======
const authRoutes = require("./src/routes/authRoutes.js");
const orderRoutes = require("./src/routes/orderRoutes.js");
const bookRoutes = require("./src/routes/bookRoutes.js");
const reviewRoutes = require("./src/routes/reviewRoutes.js");
const sequelize = require("./src/configs/db.js");
const connectDB = require("./src/configs/mongoose.js");
const cors = require("cors");

>>>>>>> fa72693562cd341495212a4396c13594fa57af03
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
