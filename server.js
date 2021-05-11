const express = require("express");
const connectDB = require("./config/db");
const auth = require("./routes/api/auth");
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/", auth);

// Define PORT
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
