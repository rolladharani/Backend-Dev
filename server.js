const express = require('express')
const app = express();
const mongoose = require('mongoose')
const path = require('path')
const bcrypt = require('bcrypt')
const cron=require('node-cron')

mongoose.connect("mongodb+srv://rolladharani77_db_user:Dharani2504@cluster0.xjaosgi.mongodb.net/")
.then(() => console.log("DB Connected"))
.catch((err) => console.log(err))

const FirstRoute = require("./src/Routes/FirstRoutes")
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/", FirstRoute);

cron.schedule('*/2 * * * * *', () => {
    console.log('running a task every 2 seconds');
  });

// app.use(express.static(path.join(__dirname,"uploads")))
app.listen(7000, () =>{
    console.log("Server started at port 7000");
})