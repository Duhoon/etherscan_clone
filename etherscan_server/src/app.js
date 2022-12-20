const express = require("express");
const app = express();
const Router = require("./router");
const log = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(log("dev"));

app.get("/test", (req, res)=>{
    console.log(process.env.PORT);
    return res.status(200).send("Running Server");
})

app.use("/", Router);

app.listen(PORT,()=>{
    console.log(`Listening ${PORT}`);
})