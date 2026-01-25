const express = require("express")
const multer=require('multer')
const  path=require('path')
const FirstController = require("../Controllers/FirstController");
const route = express.Router();
//creating storage class(multer)
const Storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
   filename:function(req,file,cd){
    cb(null,file.originalname)
   }
})
//File Filters
const FileFilters=(req,file,cb)=>{
    const AllowedTypes=/png|jpg|jpeg|svg/
    const extension=path.extname(file.originalname).toLowerCase()
    if(AllowedTypes.test(extension))
    {
        //resolve
        cb(null,true);
    }
    else{
        cb(new Error("Not valid Format"))
    }
}
//Mixing of storage class and FileFilters
const Upload = multer({
    storage:Storage,
    fileFilter : FileFilters,
    limits:{
        fileSize:1024*1024*2
    }
})

route.post("/file-upload",Upload.single('file'),FirstController.UploadFile)

route.get("/get-data", FirstController.x);

//encryption route
route.post("/encrypt-token",FirstController.encryption)

//verify encryption
route.post("/verify-encrypt",FirstController.verifEncry)
module.exports = route;
