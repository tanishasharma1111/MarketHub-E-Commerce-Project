// const express = require('express');
// const connectDB = require('./config/db');
// const cookieparser = require('cookie-parser');
// const cors = require('cors');
// const authrouter = require('./routes/auth/auth-routes');
// const adminProductRouter = require('./routes/admin/products-routes');
// const shopProductRouter = require("./routes/shop/products-routes");
// const shopCartRouter = require('./routes/shop/cart-routes');
// require('dotenv').config();
// const app = express();
// connectDB();
// const PORT = process.env.PORT || 5000;
// app.use(cors({
//     origin: "http://localhost:5174", // Adjust the origin as needed
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Expires', 'Pragma'],
// }))
// app.use(express.json());
// app.use(cookieparser());
// app.use("/api/auth", authrouter);
// app.use("/api/admin/products", adminProductRouter);
// app.use("/api/shop/products", shopProductRouter);
// app.use("/api/shop/cart", shopCartRouter);
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
const express = require("express");
const sequelize = require("./config/db"); // Sequelize connection
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
console.log("🔍 Loaded ENV:", process.env.MYSQL_USER, process.env.MYSQL_DATABASE);
// Import Routes
const authRouter = require("./routes/auth/auth-routes");
const adminProductRouter = require("./routes/admin/products-routes");
const shopProductRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");

// Import Models (so Sequelize knows about them)
const User = require("./models/user");
const Product = require("./models/product");
const { Cart, CartItem } = require("./models/Cart");

// Initialize express
const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
  })
);
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/shop/products", shopProductRouter);
app.use("/api/shop/cart", shopCartRouter);

// Database Sync + Server Start
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect and sync all models to MySQL
    await sequelize.authenticate();
    console.log("✅ MySQL connected successfully");

    // Sync tables (set { force: true } to reset DB or { alter: true } to update schema)
    await sequelize.sync({ alter: true });
    console.log("✅ All models synchronized with MySQL");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
