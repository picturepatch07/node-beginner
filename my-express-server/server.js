const express = require("express");

const app = express();

app.get("/", function(req, res){
    //console.log(req);
    res.send("<h1>Hello World!!</h1>")
})

app.get("/contact", function(req, res){
    res.send("contact me at anand2000ys@gmail.com")
})

app.get("/about", function(req, res){
    res.send("Hello, this is abhishek, a front-end developer")
})

app.get("/hobbies", function(req,res){
    res.send("<ul><li>coffee</li><li>code</li></ul>")
})

app.listen(3000, function(){
    console.log("Server started!!")
});