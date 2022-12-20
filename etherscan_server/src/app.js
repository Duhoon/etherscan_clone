const express = require("express");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/test", (req, res)=>{
    console.log(process.env.PORT);
    return res.status(200).send("Running Server");
})

app.listen(PORT,()=>{
    console.log(`Listening ${PORT}`);
})