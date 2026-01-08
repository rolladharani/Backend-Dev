const express = require('express')
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://umanandeswarikunisetti17_db_user:UmaPavan_1617@cluster0.5smw3lb.mongodb.net/")

.then(() => console.log("DB Connected"))
.catch(() => console.log(error))

// const FirstRoute = require("./src/Routes/FirstRoute")
// app.use("/", FirstRoute);

app.listen(7000, () =>{
    console.log("Server started at port 7000");
})