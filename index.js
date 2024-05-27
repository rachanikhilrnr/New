const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require("dotenv").config;

const PORT = process.env.PORT || 5000;

// const connection = mongoose.connect(process.env.MONGO_URL || "mongodb+srv://21955a1206:nikhil1528@project.cyg4qu7.mongodb.net/Travel?retryWrites=true&w=majority&appName=Project")
// .then(() => console.log("Connected"))
// .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Running in ${PORT}`)
})

app.get('/', (req,res) => {
    res.json("WELCOME");
})