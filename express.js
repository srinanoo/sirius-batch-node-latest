let express = require('express');
let app = express();
let fs = require('fs');
// let url = require('url');

app.use(express.urlencoded());
app.use(express.json());

let port = 4003;

let createRoute = require('./routes/create');
app.use("/create", createRoute);

app.use("/read", (req, res) => {
    // console.log(req.body);
    res.send("Read Route");
});

app.use("/write", (req, res) => {
    res.send("Write Route");
});

app.use("/delete", (req, res) => {
    res.send("Delete Route");
});

app.use("/", (req, res) => {
    res.send("Base Route");
});

app.listen(port, () => {
    console.log("Server has started in port: "+port);
});