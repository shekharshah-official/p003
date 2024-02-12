require('dotenv').config();
const express = require("express");

const app = express();

const port = process.env.PORT;

app.get('/',(req,res) => {
    res.send("this is first check");
});
app.get('/ruddra',(req,res) => {
    res.send(`<h1>this is ruddra page </h1>`);
});
app.listen(port,() => {
     console.log(`server is listning on the port ${port}`)
});