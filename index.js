const express = require("express")
const fs=require("fs")
const app = express();


app.set("view engine" , "ejs");

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/" , (req, res)=>{
    fs.readdir(`./files` , (error , files)=>{
        res.render(`index` , {files: files})
    })
    
});

app.post("/create" , (req, res)=>{
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt` , req.body.description , (error)=>{
        res.redirect("/");
    })
})


app.listen(3000)