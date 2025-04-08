// console.log("Hello world");

const express = require('express');
const vendorData = require('./vendors.json');
var app = express();
app.listen(3001, () => console.log("The server is now running at http://localhost:3001"));
app.get("/", (req, res) => {
    // console.log(req);
    res.send("Helllo, welcome to my server");
});
app.get("/vendors", (req, res) => {
    res.json(vendorData.vendors);
});

app.get("/vendors/:id", (req, res) => {
    // console.log(req.url);
    // console.log(req.originalUrl);
    // console.log(req.params);
    // console.log(req.params.id);
    // res.send("Hello there");
    var respData = vendorData.vendors.find((element) => {
        return element.id === req.params.id;
    });
    if (typeof (respData) != 'undefined')
        res.json(respData);
    else
        res.json({
            "message": "No vendor found"
        });
})
// console.log("The server is now running on http://localhost:3001");