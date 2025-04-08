// console.log("Hello world");

const express = require('express');
const vendorData = require('./vendors.json');
this.uuid4 = function() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }
var app = express();
app.use(express.json());
app.listen(3001, () => console.log("The server is now running at http://localhost:3001"));
app.get("/", (req, res) => {
    // console.log(req);
    res.send("Helllo, welcome to my server");
});
app.get("/vendors", (req, res) => {
    res.json(vendorData.vendors);
});

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }

app.get("/vendors/:id", (req, res) => {
    // console.log(req.url);
    // console.log(req.originalUrl);
    // console.log(req.params);
    // console.log(req.params.id);
    // res.send("Hello there");
    var respData = vendorData.vendors.find((element) => {
        return element.id === req.params.id;
    });
    // if (typeof (respData) != 'undefined')
    //     res.json(respData);
    // else
    //     res.json({
    //         "message": "No vendor found"
    //     });
    typeof (respData) != 'undefined' ? res.json(respData) : res.json({
        "message": "No vendor found"
    });
});

app.post("/vendors",(req,res) =>{
    var payload = req.body;
    payload.id = this.uuid4();
    res.json(payload);
});
// console.log("The server is now running on http://localhost:3001");