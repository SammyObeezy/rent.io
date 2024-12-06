const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const authRoute = require("./routes/AuthRoute");
const cookieParser = require("cookie-parser");
const {MONGO_URL, PORT} = process.env;

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (() => console.log("MongoDB is connected successfully"))
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(
    cors({
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(cookieParser());

app.use(express.json());

app.use('/', authRoute);