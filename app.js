const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidor = require("express-validator");
require("dotenv").config();

//import routes
const userRoutes = require("./routes/user");

// Initialise
const app = express();

// server.js
mongoose
    .connect(
        process.env.DATABASE,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("DB connected"))
    .catch(err => {
        console.log("DB CONNECTION ERROR ", err);
    });

// .middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidor());

//route middleware
app.use("/api", userRoutes);

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
