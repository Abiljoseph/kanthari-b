const express = require("express");
const mongoose = require("mongoose");
const { connected } = require("process");
const router = require("./routes/product");
const cors = require("cors")

const app = express();

//middileware
app.use(express.json());
app.use(cors());
app.use("/products",router)

mongoose.connect("mongodb+srv://kanthari:XyuyT4lxjYdI7mP3@cluster0.jwwtsxm.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("database connected")
})
.then(() =>{
    app.listen(5000);
})
.catch((err) => console.log(err.message)); 

 