let express = require('express');
let app = express();
let fs = require('fs');
let cors = require('cors');
// let url = require('url');

app.use(express.urlencoded( {extended:false} ));
app.use(express.json());
app.use(cors(
    {
        origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
    }
));

let port = 4003;

let createRoute = require('./routes/create');
app.use("/create", createRoute); // http://localhost:4000/create

let readRoute = require('./routes/read');
app.use("/read", readRoute);

app.use("/write", (req, res) => {
    res.send("Write Route");
});

app.use("/delete", (req, res) => {
    res.send("Delete Route");
});

app.use("/*", (req, res) => {
    res.send("Base Route");
});

app.listen(port, () => {
    console.log("Server has started in port: "+port);
});