const express = require("express");
const cors = require("cors");

const app = express();
const orderRoute = require("./routes/orderRoute");

require("dotenv").config();
const { connectDB } = require("./config/dbConfig");
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/orders", orderRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
