const express = require("express");
const app = express()
var fs = require("fs")
app.use(express.json())


app.get("/rooms", function (req, res) {
    fs.readFile("./Data/rooms.json","utf-8",function(err,data){
        if(err) throw err;
        res.send(data)
    })
});

app.get("/bookedrooms", function (req, res) {
    fs.readFile("./Data/booked-rooms.json","utf-8",function(err,data){
        if(err) throw err;
        res.send(data)
    })
});
app.get("/bookedcustomers", function (req, res) {
    fs.readFile("./Data/booked-customers.json","utf-8",function(err,data){
        if(err) throw err;
        res.send(data)
    })
});



app.listen(3000)