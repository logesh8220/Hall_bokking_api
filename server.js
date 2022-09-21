const express = require("express");
const app = express()
var fs = require("fs")
app.use(express.json())

app.get("/", function (req, res) {
<<<<<<< HEAD
 

        res.send("Hall_bokkings")
    
});

=======
  
        res.send("Hall_Bikkings")
    
});
>>>>>>> 59eea8451c6d3c24975c0f384e0162170587f13a
app.get("/rooms", function (req, res) {
    fs.readFile("./room.json", function (err, data) {
        if (err) throw err;
        res.send(data)
    })
});

app.get("/rooms/bookedrooms", function (req, res) {
    fs.readFile("./booked-rooms.json", function (err, data) {
        if (err) throw err;
        res.send(data)
    })
});
app.get("/rooms/bookedrooms/bookedcustomers", function (req, res) {
    fs.readFile("./booked-customers.json", function (err, data) {
        if (err) throw err;
        res.send(data)
    })
});



app.listen(process.env.PORT || 3000)
