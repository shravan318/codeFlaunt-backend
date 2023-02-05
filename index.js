const express = require("express");
const connectDB = require("./config/db");
const app = express();
connectDB();
app.get("/", (req, res) => res.send("API running"));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server started at ${PORT}`));
